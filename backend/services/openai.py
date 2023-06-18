import openai

from config import get_settings
from models.enum import TranslationLangEnum

settings = get_settings()

openai.api_key = settings.OPENAI_API_KEY


def translate(src_text: str, dst_lang: TranslationLangEnum) -> str:
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{
            "role":
            "user",
            "content":
            f"Translate the following to {dst_lang}\n{src_text}"
        }])

    translation = completion.choices[0].message['content']
    return translation.strip()


def recommendation(prompt: str) -> str:
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{
            "role":
            "user",
            "content":
            f"What should I do in the following situation? (List them out at least 5 points)\n{prompt}"
        }])

    recommendation = completion.choices[0].message['content']
    return recommendation