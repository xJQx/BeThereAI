from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db

# import app.services.prompt as prompt_services
# import app.schemas.prompt as prompt_schemas

router = APIRouter(prefix="/photo")

# @router.get('/{prompt_id}', response_model=prompt_schemas.Prompt)
# async def get_prompt_by_id(prompt_id: str, db: Session = Depends(get_db)):
#     prompt = prompt_services.get_prompt_by_id(db, prompt_id=prompt_id)
#     if prompt is None:
#         raise HTTPException(status_code=404, detail="Prompt id not found!")
#     return prompt

# @router.get('/user/{user_id}', response_model=list[prompt_schemas.Prompt])
# async def get_prompts_by_user_id(user_id: str, db: Session = Depends(get_db)):
#     prompts = prompt_services.get_prompts_by_user_id(db, user_id=user_id)
#     if prompts is None:
#         raise HTTPException(status_code=404, detail="User not found!")
#     return prompts

# @router.get("/prompts/", response_model=list[prompt_schemas.Prompt])
# def get_all_prompts(skip: int = 0,
#                     limit: int = 100,
#                     db: Session = Depends(get_db)):
#     prompts = prompt_services.get_all_prompts(db, skip=skip, limit=limit)
#     return prompts

# @router.post("/prompts/", response_model=prompt_schemas.Prompt)
# def create_prompt(prompt: prompt_schemas.PromptCreate,
#                   user_id: str,
#                   db: Session = Depends(get_db)):
#     return prompt_services.create_prompt(db=db, prompt=prompt, user_id=user_id)