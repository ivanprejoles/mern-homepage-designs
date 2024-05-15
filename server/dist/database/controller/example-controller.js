import { spawn } from 'child_process';
// import python 
export const example = (req, res) => {
    console.log(req.body);
    const pythonProcess = spawn('python', ['../python/index.py', 'argument2']);
    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
    res.json({
        message: 'dawdwad'
    });
};
//# sourceMappingURL=example-controller.js.map