"use client";
import React, { useEffect, useState } from 'react';

export default function TelemetryFeed() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/telemetry')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setLogs(data.slice(0, 5));
      });
  }, []);

  return (
    <div className="bg-zinc-950 border border-zinc-900 p-4 font-mono text-xs">
      <h3 className="text-zinc-500 mb-4 tracking-[0.2em] uppercase border-b border-zinc-900 pb-2">
        // SYSTEM TELEMETRY
      </h3>
      <div className="space-y-2">
        {logs.length > 0 ? logs.map((log, i) => (
          <div key={i} className="text-toxic">
            <span className="text-zinc-600">[{new Date(log.created_at).toLocaleTimeString()}]</span> 
            {' '}[!] {log.event}: {log.description}
          </div>
        )) : (
          <div className="text-toxic/50 animate-pulse">[ AWAITING NETWORK ACTIVITY... ]</div>
        )}
      </div>
    </div>
  );
}
