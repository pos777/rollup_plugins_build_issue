import type { RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const options: RollupOptions = {
    input: 'src/index.ts',
    output: {
        format: 'es',
        dir: 'dist'
    },
    plugins: [
        nodeResolve(),
        typescript()
    ]
};

export default options;
