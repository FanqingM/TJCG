
export class Random
{
    constructor(seed)
    {
        this._seed = seed % 2147483647;
        if (this._seed <= 0) this._seed += 2147483646;
    }

    next()
    {
        return this._seed = this._seed * 16807 % 2147483647;
    }


    nextFloat()
    {
        return (this.next() - 1) / 2147483646;
    }
}