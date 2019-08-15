export type Area = 'microbiome' | 'genome' | 'rna';

export interface Med {
    id: number,
    name: string
    type: Area
}

const medicinesName = ['Rhinotamine',
    'Actitora',
    'Clinnil',
    'Insudafinil',
    'Diclodocin',
    'Victononide',
    'Insusol Allocept',
    'Aprozal Macronorphine',
    'Flutafetan Bonitasol',
    'Agalnorphine Nedonide',
    'Adyride',
    'Marvirine',
    'Aspafenide',
    'Triampirone',
    'Pilozepam',
    'Alamid',
    'Minonazol',
    'Oxycoclotide'
]

const Data: Array<Med> = medicinesName.map((item, i) => {
    let type: Area = 'genome';
    if (i > 5) type = 'microbiome';
    if (i > 11) type = 'rna'
    return { id: i, name: item, type: type }
});

export default Data;