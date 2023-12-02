//初期状態の生成関数
const genCoordinate = (width: number, height: number): number[][][] => {
    const arr: number[][][] = [];
    let innerArr: number[][] = [];
    for (let i = 0; i <= height + 1; i++) {
        innerArr = [];
        for (let j = 0; j <= width + 1; j++) {
            if (j === 0 || j === width + 1 || i === 0 || i === height + 1) {
                innerArr[j] = [0, 0];
            } else {
                innerArr[j] = [0, Math.floor(Math.random() * 2)];
            }
        }
        arr[i] = innerArr;
    }
    return arr;
};

//各セル <- [更新前の状態, 更新後の状態]
// const hello = [
//     [[0,0], [0,0], [0,0]],
//     [[0,0], [0,0], [0,0]],
//     [[0,0], [0,0], [0,0]]
// ]

//状態の更新関数
const updateCoordinate = (width: number, height: number, arr: number[][][], TIME: number): number[][][] => {
    const cellNumber: number = TIME % 2;
    const cellNumberInversion: number = Math.abs(cellNumber - 1);

    for (let i: number = 1; i <= height; i++) {
        for (let j: number = 1; j <= width; j++) {
            //arr[i][j][0] -> arr[i][j][1]移動処理いる
            arr[i][j]; //代入するセル
            //描画の保存処理
            context.save();
            if (arr[i][j][cellNumberInversion] === 0) {
                //セルが死んでいた場合
                const lifes: number =
                    arr[i - 1][j - 1][cellNumberInversion] +
                    arr[i - 1][j][cellNumberInversion] +
                    arr[i - 1][j + 1][cellNumberInversion] +
                    arr[i][j - 1][cellNumberInversion] +
                    arr[i][j][cellNumberInversion] +
                    arr[i][j + 1][cellNumberInversion] +
                    arr[i + 1][j - 1][cellNumberInversion] +
                    arr[i + 1][j][cellNumberInversion] +
                    arr[i + 1][j + 1][cellNumberInversion];
                if (lifes === 3) {
                    arr[i][j][cellNumber] = 1;
                    context.fillRect(j * 6, i * 6, 6, 6);
                } else {
                    arr[i][j][cellNumber] = 0;
                    context.clearRect(j * 6, i * 6, 6, 6);
                    context.strokeRect(j * 6, i * 6, 6, 6);
                }
                // console.log(`lifes: ${lifes}`);
            } else if (arr[i][j][cellNumberInversion] === 1) {
                //セルが生きていた場合
                const lifes: number =
                    arr[i - 1][j - 1][cellNumberInversion] +
                    arr[i - 1][j][cellNumberInversion] +
                    arr[i - 1][j + 1][cellNumberInversion] +
                    arr[i][j - 1][cellNumberInversion] +
                    arr[i][j][cellNumberInversion] +
                    arr[i][j + 1][cellNumberInversion] +
                    arr[i + 1][j - 1][cellNumberInversion] +
                    arr[i + 1][j][cellNumberInversion] +
                    arr[i + 1][j + 1][cellNumberInversion];
                // console.log(`lifes: ${lifes}`);
                if (lifes === 3 || lifes === 2) {
                    arr[i][j][cellNumber] = 1;
                    context.fillRect(j * 6, i * 6, 6, 6);
                } else {
                    arr[i][j][cellNumber] = 0;
                    context.clearRect(j * 6, i * 6, 6, 6);
                    context.strokeRect(j * 6, i * 6, 6, 6);
                }
            } else {
                console.error('error');
            }
            //描画の保存処理
            context.restore();
        }
    }
    return arr;
};

const sleep = (ms: number): Promise<void> => {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
    return promise;
};
///////////////////////////////////////////////////////////////////////////
const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');

//サイズ設定
const canvasWidth: number = 612;
const canvasHeight: number = 612;
//高解像度ディスプレイ対応
const canvasLargeWidth: number = canvasWidth * devicePixelRatio;
const canvasLargeHeight: number = canvasHeight * devicePixelRatio;
canvas.setAttribute('width', String(canvasWidth));
canvas.setAttribute('height', String(canvasHeight));
canvas.style.width = String(canvasLargeWidth / devicePixelRatio) + 'px';
canvas.style.height = String(canvasLargeHeight / devicePixelRatio) + 'px';

//描画以外の初期設定
const width = 100;
const height = 100;

//2D描画のためにいるやつ
const context = <CanvasRenderingContext2D>canvas.getContext('2d');

context.strokeStyle = 'black';
context.lineWidth = 0.5;

//初期状態
const genField = (): void => {
    for (let i = 0; i <= height + 1; i++) {
        for (let j = 0; j <= width + 1; j++) {
            context.save();
            context.translate(j * 6, i * 6);
            context.strokeRect(0, 0, 6, 6);
            context.restore();
        }
    }
};

//実行エリア
genField();

const main = async () => {
    let arr = genCoordinate(width, height);
    for (let i = 0; i <= 1000; i++) {
        arr = updateCoordinate(width, height, arr, i);
        await sleep(100);
    }
};

main();
