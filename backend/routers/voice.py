from fastapi import APIRouter, UploadFile, HTTPException
from fastapi.responses import FileResponse

import os
import services.hume as humes_services

router = APIRouter(prefix="/voice")


@router.post('/upload')
async def upload_photo(file: UploadFile):
    contents = await file.read()
    with open(file.filename, 'wb+') as f:
        f.write(contents)

    return {"filename": file.filename}


@router.get('/read/{filename}')
async def get_photo(filename: str):
    if not os.path.exists(filename):
        raise HTTPException(status_code=400,
                            detail="File name does not exist!")
    return FileResponse(filename)


@router.get('/mood/{filename}')
async def photo_mood(filename: str):
    if not os.path.exists(filename):
        raise HTTPException(status_code=400,
                            detail="File name does not exist!")
    return humes_services.process_voice_hume(filename)