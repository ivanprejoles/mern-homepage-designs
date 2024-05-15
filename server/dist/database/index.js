import mongoose from "mongoose";
const connectToDb = async () => {
    try {
        const uri = 'mongodb+srv://ivanpatrickprejoles:KyyJu30WvhHgODuG@financial-cluster.emfyckv.mongodb.net/test';
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with an error code (optional)
    }
};
// Export the connectToDb function
export default connectToDb;
//# sourceMappingURL=index.js.map