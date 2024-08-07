// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const userCollection = () => {
    const collections = [];

    const addCollection = (coll) => {
        collections.push(coll);
        console.log("successfully added to collection");
    }

    const removeCollection = (index) => {
        if (index <= -1 || index > (collections.length - 1)) {
            console.log("incorrect Index");
            return false;
        }
        collections.splice(index, 1);
        console.log("successfully removed to collection");
    }

    const listCollection = () => {
        console.log("collection:");
        console.log(collections);
    }

    return { addCollection, removeCollection, listCollection }
}

const uc = userCollection();
uc.addCollection(50);
uc.addCollection(5);
uc.listCollection();
uc.removeCollection(1);
uc.listCollection();