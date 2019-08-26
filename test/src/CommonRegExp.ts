export class CommonRegExp {
    public static endOfLine = /\r\n|\r|\n/;
    public static inlineComment = /\/\/.*\n/g;
    public static multLineComment = /\/\*[\s\S]*?\*\//g;
    public static assignmentStatement = /.*=.*[;,]/g;
    public static enumDeclare = /(export\s+)?(enum)\s+\w+\s\{[\s\S]*?\}/g;
    public static enumName = /(?<=enum\s+)\w+/;
    public static statement = /.*?;/g;
}
