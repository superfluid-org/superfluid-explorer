import requests, pandas as pd, os, dotenv
from queries import supertoken_metrics
dotenv.load_dotenv()

url = 'https://base-mainnet.subgraph.x.superfluid.dev/'

def run_query(query):
    response = requests.post(url, json={'query': query})
    if response.status_code == 200:
        data = response.json()
        if 'errors' in data:
            print(f'Errores en la respuesta: {data["errors"]}')
            return None
        elif 'data' in data:
            return data['data']
        else:
            print(f'La respuesta no contiene la estructura esperada: {data}')
            return None
    else:
        print(f'Error {response.status_code}: {response.text}')
        return None
    
def supertoken_metrics_function(token_address):
    query = supertoken_metrics(token_address)
    data = run_query(query)
    if data is None:
        return None
    print(data)
    return data

supertoken_metrics_function("0x1eff3dd78f4a14abfa9fa66579bd3ce9e1b30529")