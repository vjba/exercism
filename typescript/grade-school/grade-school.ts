export default class GradeSchool {

    private studentDb: Map<string, string[]>

    constructor() {
        this.studentDb = new Map()
    }

    studentRoster(): Map<string, string[]> {
        const clone = new Map();
        for (const grade of this.studentDb.keys()) {
            const students: string[] = this.studentDb.get(grade) || [];
            clone.set(grade, [...students]);
        }
        return clone;
    }

    addStudent(name: string, grade: number): void {
        this.studentDb.set(String(grade), (this.studentDb.get(String(grade)) || []).concat(name).sort())
    }

    studentsInGrade(grade: number): string[] {
        let clone: string[] = []
        clone.push(...this.studentDb.get(String(grade)) || [])
        return clone
    }
}
