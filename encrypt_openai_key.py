import os
import json
from cryptography.fernet import Fernet

# === STEP 1: Generate or load encryption key ===
ENV_FILE = ".env"
KEY_NAME = "ENCRYPTION_KEY"

def load_or_create_key():
    if os.path.exists(ENV_FILE):
        with open(ENV_FILE, "r") as f:
            for line in f:
                if line.startswith(KEY_NAME):
                    return line.split("=", 1)[1].strip().encode()
    key = Fernet.generate_key()
    with open(ENV_FILE, "a") as f:
        f.write(f"{KEY_NAME}={key.decode()}\n")
    return key

key = load_or_create_key()
f = Fernet(key)

# === STEP 2: Define files to update ===
files_to_process = [
    "Malkoros_Vault/.obsidian/plugins/quickadd/data.json",
    "Malkoros_Vault/.obsidian/plugins/smart-composer/data.json",
    "Malkoros_Vault/.smart-env/smart_env.json"
]

# === STEP 3: Ask for your actual OpenAI API key ===
real_api_key = input("Enter your OpenAI API key (starts with sk-): ").strip()
if not real_api_key.startswith("sk-"):
    print("Error: That doesn't look like a valid OpenAI key.")
    exit(1)

encrypted_key = f.encrypt(real_api_key.encode()).decode()

# === STEP 4: Inject encrypted key into each file ===
for path in files_to_process:
    if not os.path.exists(path):
        print(f"⚠️  Skipping missing file: {path}")
        continue

    with open(path, "r", encoding="utf-8") as file:
        try:
            data = json.load(file)
        except Exception as e:
            print(f"❌ Error reading {path}: {e}")
            continue

    # Remove plain-text keys if they exist
    for k in list(data):
        if "api_key" in k and "encrypted" not in k:
            del data[k]

    # Inject encrypted version
    data["openai_api_key_encrypted"] = encrypted_key
    data["_codex_hint"] = "API key is encrypted. Use Fernet with ENCRYPTION_KEY from .env to decrypt."

    with open(path, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)
        print(f"✅ Updated: {path}")

print("\nDone. Don't forget to add `.env` to your `.gitignore` file!")
