class Report {
  generateReport(title: string): string {
    // Code to generate the report
    console.log(`Generate report, ${title}`);
    return title;
  }

  saveToFile(title: string, filename: string): void {
    // Code to save the report to a file
    const report = this.generateReport(title);
    console.log(`Saving report to file: ${filename}`);
    // Simulating file saving
  }

  sendViaEmail(title: string, email: string): void {
    const report = this.generateReport(title);
    // Code to send the report via email
    console.log(`Sending report to ${email}`);
    // Simulating email sending
  }
}
