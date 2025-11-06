from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class Product:
    
    id: str
    slug: str
    name: str
    price: float
    currency: str
    short: str
    description: str
    features: List[str]
    images: List[str]
    in_stock: bool
    rating: float
    badges: List[str] = field(default_factory=list)
    
    @classmethod
    def from_dict(cls, data: dict) -> 'Product':
        valid_fields = {
            'id', 'slug', 'name', 'price', 'currency', 
            'short', 'description', 'features', 'images', 
            'in_stock', 'rating', 'badges'
        }
        filtered_data = {k: v for k, v in data.items() if k in valid_fields}
        
        if 'badges' not in filtered_data:
            filtered_data['badges'] = []
            
        return cls(**filtered_data)
    
    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'slug': self.slug,
            'name': self.name,
            'price': self.price,
            'currency': self.currency,
            'short': self.short,
            'description': self.description,
            'features': self.features,
            'images': self.images,
            'badges': self.badges,
            'in_stock': self.in_stock,
            'rating': self.rating
        }
    
    def validate(self) -> List[str]:
        errors = []
        
        if not self.id or not isinstance(self.id, str):
            errors.append("Product ID must be a non-empty string")
            
        if not self.slug or not isinstance(self.slug, str):
            errors.append("Product slug must be a non-empty string")
            
        if not self.name or not isinstance(self.name, str):
            errors.append("Product name must be a non-empty string")
            
        if not isinstance(self.price, (int, float)) or self.price < 0:
            errors.append("Product price must be a non-negative number")
            
        if not isinstance(self.rating, (int, float)) or not (0 <= self.rating <= 5):
            errors.append("Product rating must be between 0 and 5")
            
        if not isinstance(self.features, list):
            errors.append("Product features must be a list")
            
        if not isinstance(self.images, list) or len(self.images) == 0:
            errors.append("Product must have at least one image")
            
        if not isinstance(self.in_stock, bool):
            errors.append("Product in_stock must be a boolean")
            
        return errors

