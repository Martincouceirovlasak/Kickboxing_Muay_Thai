
import json

with open('news_api/src/output.json', encoding='utf-8') as f:
    data = json.load(f)

data = json.loads(data)

print(data["articles"][0]['title'])    
