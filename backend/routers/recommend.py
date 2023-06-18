from fastapi import APIRouter, Depends, HTTPException

import services.openai as openai_services

router = APIRouter(prefix="/recommend")


@router.post('/mood')
async def translate_text(mood: int):
    prompt = f"My mood is {mood} from a scale of 1-100, with 1 being very sad and 100 being very happy."
    return openai_services.recommendation(prompt).strip()
