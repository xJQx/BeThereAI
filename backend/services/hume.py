from config import get_settings

from hume import HumeBatchClient
from hume.models.config import FaceConfig

settings = get_settings()

client = HumeBatchClient(settings.HUME_API_KEY)


def process_image_hume(image_url: str):
    config = FaceConfig(facs={})
    job = client.submit_job(["https://tinyurl.com/hume-img"], [config])

    job.await_complete()

    full_predictions = job.get_predictions()
    predictions = full_predictions[0]["results"]["predictions"]
    face_predictions = predictions[0]["models"]["face"]["grouped_predictions"]
    emotions = face_predictions[0]['predictions'][0]['emotions']
    return emotions
