const fs = require('fs');


class Writer {
    constructor(filename, contents) {
        if (!filename || !contents) throw new Error('Missing Arguments!');
        this.data = contents;
        this.file = filename;
    }
    writeData() {
        fs.writeFileSync(this.file, this.data);
        return true
    }
    toString() {
        return `A Writer w/ a filename of ${this.file} and contents of ${this.data}`;
    }
}

module.exports = Writer;