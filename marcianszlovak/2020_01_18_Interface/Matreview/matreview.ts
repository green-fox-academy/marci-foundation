interface FileManipulator {
  read(path: string): string[];
  write(path: string): void;
}

class CSVFileManipulator implements FileManipulator {
  read(path: string): string[] {
    return [];
  }
  write(path: string): void {}
}

class JSONFileManipulator implements FileManipulator {
  read(path: string): string[] {
    return [];
  }
  write(path: string): void {}
}

class LottoNumberGenerator {
  fileManipulator: FileManipulator;

  constructor(fileManipulator: FileManipulator) {
    this.fileManipulator = fileManipulator;
  }
}

new LottoNumberGenerator(new CSVFileManipulator());
