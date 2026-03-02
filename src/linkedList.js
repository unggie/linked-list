function node(value = null, nextNode = null, index = null) {
    return {value, nextNode, index}
}

export function LinkedList() {
    const dataArray = [];
    const append = element => {
        const value = element;
        const index = (dataArray.length - 1 < 0) 
            ? 0
            : dataArray.length;
        const listItem = node(value, null, index);
        if (dataArray[index - 1] != null) dataArray[index - 1].nextNode = listItem;
        return dataArray.push(listItem);
    }

    const prepend = element => {
        const value = element;
        const index = 0;
        let nextNode = null;
        dataArray.forEach(element => {
            if (element.index === 0) nextNode = element;
            element.index++;
        });
        const listItem = node(value, nextNode, index);
        return dataArray.push(listItem);
    }

    const size = () => {
        return dataArray.length;
    }

    const head = () => {
        if (dataArray.length === 0 || dataArray == null) return undefined;
        let head = null;
        dataArray.forEach(element => {
            if (element.index === 0) {
                head = element;
                return;
            }
        });
        return head;
    }

    const tail = () => {
        if (dataArray.length === 0 || dataArray == null) return undefined;
        let tail = null;
        dataArray.forEach(element => {
            if (element.index === dataArray.length - 1) {
                tail = element;
                return;
            };
        })
        return tail;
    }

    const at = index => {
        if (dataArray.length === 0 || dataArray == null) return undefined;
        let listItem = undefined;

        dataArray.forEach(element => {
            if (element.index === index) {
                listItem = element;
                return;
            }
        })
        return listItem;
    }

    const pop = () => {
        if (dataArray.length === 0 || dataArray == null) return undefined;
        let head = null;
        dataArray.forEach(element => {
            if (element.index === 0) {
                dataArray.splice(dataArray.indexOf(element), 1);
                head = element;
            }
            element.index--;
        })
        return head;
    }
    
    const contains = value => {
        let present = false;
        dataArray.forEach(element => {
            if (element.value === value) {
                present = true;
                return;
            }
        })
        return present;
    }

    const findIndex = value => {
        let index = -1;
        dataArray.forEach(element => {
            if (element.value === value) {
                index = element.index;
                return;
            }
        })
        return index;
    }

    const toString = (headNode = head(), result = "") => {
        if (dataArray.length === 0 || dataArray == null) return result;
        if (headNode.nextNode === null) return result.concat(`( ${headNode.value} ) -> null`);
        else {
            result = result.concat(`( ${headNode.value} ) -> `);
            return toString(headNode.nextNode, result);
        }
    }
    return {append, prepend, size, head, tail, at, pop, contains, findIndex, toString}
}