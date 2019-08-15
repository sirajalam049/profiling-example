import React, { useState, memo, useMemo } from 'react';
import './App.css';
import Data from './data';

const App: React.SFC = () => {

    const [showMicrobiome, setShowMicrobiome] = useState(true);
    const [showRna, setShowRna] = useState(true);
    const [showGenome, setShowGenome] = useState(true);

    const handleMicrobiomeChange = () => setShowMicrobiome(!showMicrobiome);

    const handleRnaChange = () => setShowRna(!showRna);

    const handleGenomeChange = () => setShowGenome(!showGenome);

    const genomeMeds = useMemo(() => (Data.filter(item => item.type === 'genome')), []);

    const rnaMeds = useMemo(() => (Data.filter(item => item.type === 'rna')), []);

    const microbiomeMeds = useMemo(() => (Data.filter(item => item.type === 'microbiome')), []);

    return (
        <div className={'root'} >
            <div className={'checkboxContainer'} >
                <div>Microbiome <input type="checkbox" name='microbiome' checked={showMicrobiome} onChange={handleMicrobiomeChange} /></div>
                <div>Genome <input type="checkbox" name='genome' checked={showGenome} onChange={handleGenomeChange} /></div>
                <div>RNA <input type="checkbox" name='rna' checked={showRna} onChange={handleRnaChange} /></div>
            </div>
            <div className={'medsContainer'} >
                {
                    showMicrobiome ? microbiomeMeds.map(item => {
                        return <ListItem key={item.id} color={'red'} label={item.name} />
                    }) : null
                }
                {
                    showRna ? rnaMeds.map(item => {
                        return <ListItem key={item.id} color={'green'} label={item.name} />
                    }) : null
                }
                {
                    showGenome ? genomeMeds.map(item => {
                        return <ListItem key={item.id} color={'blue'} label={item.name} />
                    }) : null
                }
            </div>
        </div>
    )
}

const ListItem: React.SFC<{ color: 'green' | 'red' | 'blue', label: string }> = memo((props) => {
    return <div className={`buttons ${props.color}`} >{props.label}</div>
})


export default App;
