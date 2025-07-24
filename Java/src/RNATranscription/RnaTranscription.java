public class RnaTranscription {
    String transcribe(String dnaStrand) {

        dnaStrand = dnaStrand.replace('G', 'c' );
        dnaStrand = dnaStrand.replace('C', 'g');
        dnaStrand = dnaStrand.replace('T', 'a');
        dnaStrand = dnaStrand.replace('A', 'U');

        dnaStrand = dnaStrand.replace('c', 'C');
        dnaStrand = dnaStrand.replace('g', 'G');
        dnaStrand = dnaStrand.replace('a', 'A');

        return dnaStrand;
    }
}
