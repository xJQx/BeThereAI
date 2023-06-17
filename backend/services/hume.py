from backend.config import get_settings

from hume import HumeBatchClient
from hume.models.config import FaceConfig

settings = get_settings()

client = HumeBatchClient(settings.HUME_API_KEY)


def process_image_hume(image_url: str):
    config = FaceConfig(facs={})
    job = client.submit_job([image_url], [config])

    job.await_complete()

    full_predictions = job.get_predictions()
    for source in full_predictions:
        source_name = source["source"]["url"]
        predictions = source["results"]["predictions"]
        for prediction in predictions:
            face_predictions = prediction["models"]["face"][
                "grouped_predictions"]
            for face_prediction in face_predictions:
                for frame in face_prediction["predictions"]:
                    print_emotions(frame["emotions"])