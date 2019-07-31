import reducer, { agregar, eliminar } from './finanzas'
import { italic } from 'ansi-colors';

describe('Finanzas Duck', () => {
    describe('Action Creators', () => {
        it('agregar', () => {
            const resultado = agregar(1);
            expect(resultado).toEqual({
                type: "AGREGAR",
                payload: 1
            });
        });

        it('eliminar', () => {
            const resultado = eliminar(1);
            expect(resultado).toEqual({
                type: "ELIMINAR",
                index: 1
            });
        });
    });


    describe('reducer', () => {
        it('AGREGAR', () => {
            const resultado = reducer([1], {
                type: 'AGREGAR',
                payload: 2
            });
    
            expect(resultado).toEqual([1,2]);
        });

        it('ELIMINAR', () => {
            const resultado = reducer([1, 2, 3], {
                type: 'ELIMINAR',
                index: 0
            });
    
            expect(resultado).toEqual([2, 3]);
        });

        it('DEFAULT', () => {
            const resultado = reducer(1, {
                type: "NADA",
                index: 0
            });
    
            expect(resultado).toEqual(1);
        });
    });
});