import { useState, useEffect } from 'react';
import { Plus, Upload, RefreshCw, Calendar, Download } from 'lucide-react';

export default function AdminBookings() {
  const [properties, setProperties] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [showICalImport, setShowICalImport] = useState(false);
  const [icalForm, setICalForm] = useState({ sourceName: '', sourceUrl: '' });
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/properties', {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await response.json();
    setProperties(data);
  };

  const handleICalImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProperty) return;

    const token = localStorage.getItem('token');
    const response = await fetch(`/api/properties/${selectedProperty}/ical-import`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(icalForm),
    });

    if (response.ok) {
      alert('iCal imported successfully!');
      setShowICalImport(false);
      setICalForm({ sourceName: '', sourceUrl: '' });
    } else {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  };

  const handleSync = async () => {
    if (!selectedProperty) return;
    setSyncing(true);

    const token = localStorage.getItem('token');
    const response = await fetch(`/api/properties/${selectedProperty}/ical-sync`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
    });

    const data = await response.json();
    setSyncing(false);
    alert(`Synced ${data.totalImported} events`);
  };

  const downloadICalendar = () => {
    if (!selectedProperty) return;
    window.open(`/api/ical/property/${selectedProperty}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Property Management</h1>
          <button
            onClick={() => setShowAddProperty(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Property
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Your Properties</h2>
              <div className="space-y-2">
                {properties.map(property => (
                  <button
                    key={property.id}
                    onClick={() => setSelectedProperty(property.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedProperty === property.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <div className="font-semibold">{property.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{property.location}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedProperty ? (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Calendar Management</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      onClick={() => setShowICalImport(true)}
                      className="flex flex-col items-center gap-2 p-6 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      <Upload className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-gray-100">Import iCal</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">Airbnb, Booking, VRBO</span>
                    </button>

                    <button
                      onClick={handleSync}
                      disabled={syncing}
                      className="flex flex-col items-center gap-2 p-6 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl hover:border-green-500 dark:hover:border-green-500 transition-colors disabled:opacity-50"
                    >
                      <RefreshCw className={`w-8 h-8 text-gray-600 dark:text-gray-400 ${syncing ? 'animate-spin' : ''}`} />
                      <span className="font-semibold text-gray-900 dark:text-gray-100">Sync Calendars</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">Update all sources</span>
                    </button>

                    <button
                      onClick={downloadICalendar}
                      className="flex flex-col items-center gap-2 p-6 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
                    >
                      <Download className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-gray-100">Export iCal</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">Download .ics file</span>
                    </button>
                  </div>
                </div>

                {showICalImport && (
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Import iCal Feed</h3>
                    <form onSubmit={handleICalImport} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Source Name
                        </label>
                        <input
                          type="text"
                          required
                          value={icalForm.sourceName}
                          onChange={(e) => setICalForm({ ...icalForm, sourceName: e.target.value })}
                          placeholder="e.g., Airbnb, Booking.com"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          iCal URL
                        </label>
                        <input
                          type="url"
                          required
                          value={icalForm.sourceUrl}
                          onChange={(e) => setICalForm({ ...icalForm, sourceUrl: e.target.value })}
                          placeholder="https://..."
                          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="submit"
                          className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                        >
                          Import
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowICalImport(false)}
                          className="px-6 py-2 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-gray-100 rounded-lg font-semibold transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">How to get iCal URLs:</h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• <strong>Airbnb:</strong> Go to Calendar → Availability settings → Export calendar</li>
                        <li>• <strong>Booking.com:</strong> Extranet → Calendar → Import/Export calendar</li>
                        <li>• <strong>VRBO:</strong> Calendar → Import/Export → Export calendar</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 border border-gray-200 dark:border-slate-700 text-center">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Select a property to manage its calendar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
