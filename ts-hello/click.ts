
export class Click
{
    constructor(private buttonState: boolean, private _numClicks?: number)
    {

    }

    countClicks()
    {
        this.buttonState == true
            this._numClicks = this._numClicks + 1;
    }

    getClicks()
    {
        console.log('Number of clicks = ' + this._numClicks);
    }

}