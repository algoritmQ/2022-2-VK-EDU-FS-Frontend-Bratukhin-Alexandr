/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) 
{
    const dict = {
        1 : 'B',
        2 : 'KB',
        3 : 'MB',
        4 : 'GB',
        5 : 'TB'
    }
    if(typeof bytes === 'string' || typeof bytes === 'boolean'){
        return false;
    }           
    
    if(bytes<0 || bytes === null){
        return false;
    }
    bytes = Number(bytes);
    let i = 1;
    while(bytes>=1024){
        bytes/=1024;
        ++i;
    }
    if(i>5){
        i = 5;
    }
    else if(bytes.toFixed(2) - bytes !== 0){
        return (bytes.toFixed(2) + ' ' + dict[i]);
    }else{
        return (bytes + ' ' + dict[i]);
    }    
}
