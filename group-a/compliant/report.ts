// Abstractions
interface ReportGenerator {
  generateReport(): string;
}

interface ReportSaver {
  save(content: string, filename: string): void;
}

interface ReportSender {
  send(content: string, email: string): void;
}

// Concrete implementations
class Report implements ReportGenerator {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  generateReport(): string {
    // Code to generate the report
    return `Report Data: ${this.data}`;
  }
}

class FileSaver implements ReportSaver {
  save(content: string, filename: string): void {
    console.log(`Saving content to file: ${filename}`);
    // Simulating file saving
  }
}

class EmailSender implements ReportSender {
  send(content: string, email: string): void {
    console.log(`Sending content to ${email}`);
    // Simulating email sending
  }
}

// High-level module depends on abstractions
class ReportManager {
  private generator: ReportGenerator;
  private saver: ReportSaver;
  private sender: ReportSender;

  constructor(
    generator: ReportGenerator,
    saver: ReportSaver,
    sender: ReportSender
  ) {
    this.generator = generator;
    this.saver = saver;
    this.sender = sender;
  }

  handleReport(filename: string, email: string): void {
    const report = this.generator.generateReport();
    this.saver.save(report, filename);
    this.sender.send(report, email);
  }
}

// Usage
const report = new Report('Annual Financial Data');
const fileSaver = new FileSaver();
const emailSender = new EmailSender();

const reportManager = new ReportManager(report, fileSaver, emailSender);
reportManager.handleReport('report.txt', 'example@example.com');
