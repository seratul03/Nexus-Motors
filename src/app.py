import json
from pathlib import Path
from typing import List, Optional

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev-secret-key-nexus-motors'

BASE_DIR = Path(__file__).parent

_models_cache: Optional[List[dict]] = None


def load_models() -> List[dict]:
    global _models_cache
    
    if _models_cache is None:
        models_file = BASE_DIR / 'data' / 'models.json'
        
        try:
            with open(models_file, 'r', encoding='utf-8') as f:
                _models_cache = json.load(f)
            print(f"✓ Loaded {len(_models_cache)} vehicle models from {models_file}")
        except FileNotFoundError:
            print(f"✗ Models file not found: {models_file}")
            _models_cache = []
        except json.JSONDecodeError as e:
            print(f"✗ Invalid JSON in models file: {e}")
            _models_cache = []
    
    return _models_cache


def load_json(filename: str) -> dict:
    json_file = BASE_DIR / 'data' / filename
    
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"✓ Loaded {filename}")
        return data
    except FileNotFoundError:
        print(f"✗ File not found: {json_file}")
        return {}
    except json.JSONDecodeError as e:
        print(f"✗ Invalid JSON in {filename}: {e}")
        return {}


@app.route('/')
def index():
    return redirect(url_for('about'))


@app.route('/products')
def products():
    all_models = load_models()
    return render_template('products.html', models=all_models)


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/technology')
def technology():
    tech_data = load_json('technology.json')
    return render_template('technology.html', tech=tech_data)


@app.route('/sustainability')
def sustainability():
    sustainability_data = load_json('sustainability.json')
    return render_template('sustainability.html', sus=sustainability_data)


@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404


@app.errorhandler(500)
def server_error(error):
    return render_template('500.html'), 500


@app.context_processor
def inject_globals():
    return {
        'site_name': 'Nexus Motors',
        'current_year': 2025
    }


if __name__ == '__main__':
    load_models()
    app.run(debug=True, host='127.0.0.1', port=5000)

