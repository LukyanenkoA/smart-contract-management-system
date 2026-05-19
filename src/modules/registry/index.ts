// Модуль электронного реестра
export class Registry {
  dbConnection: any;
  buffer: any[];
  currentSession: string;
  records: any[];

  constructor() {
    this.records = [];
    this.buffer = [];
    this.currentSession = new Date().toISOString();
  }

  logEvent(eventType: string, data: any): void {
    const record = {
      id: this.records.length + 1,
      eventType: eventType,
      timestamp: new Date().toISOString(),
      ...data
    };
    this.records.push(record);
    console.log('Событие зарегистрировано:', record);
  }

  getRegistry(): any[] {
    return this.records;
  }

  exportToCSV(): string {
    if (this.records.length === 0) return '';
    const headers = Object.keys(this.records[0]);
    let csv = headers.join(',') + '\n';
    for (const record of this.records) {
      const row = headers.map(h => JSON.stringify(record[h] || '')).join(',');
      csv += row + '\n';
    }
    return csv;
  }

  exportToJSON(): string {
    return JSON.stringify(this.records, null, 2);
  }

  handleError(error: any): void {
    this.logEvent('error', { message: error.message || 'Unknown error' });
  }
}// Version from main 
