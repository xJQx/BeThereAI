from fastapi import APIRouter, Depends, HTTPException

from models.enum import TranslationLangEnum

import services.openai as openai_services

router = APIRouter(prefix="/translate")


@router.post('/text')
async def translate_text(text: str, lang: TranslationLangEnum):
    return openai_services.translate(text, lang)
