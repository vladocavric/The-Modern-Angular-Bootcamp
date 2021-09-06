export abstract class Sorter {
    abstract length: number
    abstract compare(indexLeft: number, indexRight: number): boolean
    abstract swap(indexLeft: number, indexRight: number): void
    sort(): void {
        const length = this.length
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if(this.compare(j, j+1)) {
                    this.swap(j, j+1)
                }
            }
        }
    }
}
