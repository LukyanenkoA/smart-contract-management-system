// Клиентская часть на React
import React, { useState } from 'react';

interface AssetData {
  name: string;
  symbol: string;
  totalSupply: number;
  decimals: number;
  contractType: string;
}

function App() {
  const [assetName, setAssetName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState(1000000);
  const [decimals, setDecimals] = useState(18);
  const [contractType, setContractType] = useState('ERC-20');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAsset = async () => {
    if (!assetName || !symbol) {
      setStatus('Ошибка: заполните название и символ');
      return;
    }

    setIsLoading(true);
    setStatus('Создание черновика...');

    // Имитация отправки на сервер
    setTimeout(() => {
      const assetData: AssetData = {
        name: assetName,
        symbol: symbol.toUpperCase(),
        totalSupply: totalSupply,
        decimals: decimals,
        contractType: contractType
      };
      
      console.log('Актив создан:', assetData);
      setStatus(`Актив ${assetName} (${symbol.toUpperCase()}) успешно создан`);
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setAssetName('');
    setSymbol('');
    setTotalSupply(1000000);
    setDecimals(18);
    setContractType('ERC-20');
    setStatus('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Управление смарт-контрактами</h1>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Название актива:</label>
        <input 
          value={assetName} 
          onChange={(e) => setAssetName(e.target.value)}
          style={{ width: '300px', padding: '5px' }}
          placeholder="например: MyToken"
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Символ (тикер):</label>
        <input 
          value={symbol} 
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          style={{ width: '300px', padding: '5px' }}
          placeholder="например: MTK"
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Объем эмиссии:</label>
        <input 
          type="number"
          value={totalSupply} 
          onChange={(e) => setTotalSupply(Number(e.target.value))}
          style={{ width: '300px', padding: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Тип контракта:</label>
        <select 
          value={contractType} 
          onChange={(e) => setContractType(e.target.value)}
          style={{ width: '300px', padding: '5px' }}
        >
          <option>ERC-20</option>
          <option>ERC-721</option>
          <option>ERC-1155</option>
        </select>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Десятичные знаки:</label>
        <input 
          type="number"
          value={decimals} 
          onChange={(e) => setDecimals(Number(e.target.value))}
          style={{ width: '300px', padding: '5px' }}
          min="0"
          max="18"
        />
      </div>
      
      <div>
        <button 
          onClick={handleCreateAsset} 
          disabled={isLoading}
          style={{ 
            padding: '8px 16px', 
            marginRight: '10px',
            backgroundColor: isLoading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Создание...' : 'Создать черновик'}
        </button>
        
        <button 
          onClick={handleReset}
          style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Очистить
        </button>
      </div>
      
      {status && (
        <p style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: status.includes('Ошибка') ? '#f8d7da' : '#d4edda',
          color: status.includes('Ошибка') ? '#721c24' : '#155724',
          borderRadius: '4px'
        }}>
          {status}
        </p>
      )}
    </div>
  );
}

export default App;