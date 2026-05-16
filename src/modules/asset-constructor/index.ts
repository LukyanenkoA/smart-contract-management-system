// Модуль визуального конструктора активов
export class AssetConstructor {
  name: string;
  symbol: string;
  totalSupply: number;
  decimals: number;
  contractType: string;
  features: string[];
  metadataURIs: string[];

  constructor() {
    this.name = '';
    this.symbol = '';
    this.totalSupply = 1000000;
    this.decimals = 18;
    this.contractType = 'ERC-20';
    this.features = [];
    this.metadataURIs = [];
  }

  validateFields(): boolean {
    if (this.name.length < 3 || this.name.length > 50) return false;
    if (this.symbol.length < 2 || this.symbol.length > 10) return false;
    if (this.totalSupply <= 0) return false;
    if (this.decimals < 0 || this.decimals > 18) return false;
    return true;
  }

  generateJSON(): object {
    return {
      name: this.name,
      symbol: this.symbol,
      totalSupply: this.totalSupply,
      decimals: this.decimals,
      contractType: this.contractType,
      features: this.features,
      metadataURIs: this.metadataURIs,
      createdAt: new Date().toISOString()
    };
  }

  saveDraft(): void {
    console.log('Черновик сохранен:', this.generateJSON());
  }
}