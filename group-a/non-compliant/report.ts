class Report {
  private data: string;

  constructor(data: string) {
      this.data = data;
  }

  generateReport(): string {
      // Code to generate the report
      return `Report Data: ${this.data}`;
  }
}

class FileSaver {
  saveToFile(content: string, filename: string): void {
      // Code to save the content to a file
      console.log(`Saving content to file: ${filename}`);
      // Simulating file saving
  }
}

class EmailSender {
  sendViaEmail(content: string, email: string): void {
      // Code to send the content via email
      console.log(`Sending content to ${email}`);
      // Simulating email sending
  }
}

// Usage
const report = new Report("Annual Financial Data");
const generatedReport = report.generateReport();

const fileSaver = new FileSaver();
fileSaver.saveToFile(generatedReport, "report.txt");

const emailSender = new EmailSender();
emailSender.sendViaEmail(generatedReport, "example@example.com");
