BEGIN;

INSERT INTO blogful_articles (title, date_published, content)
VALUES
    ('first post', now() - '21 days'::INTERVAL, 'the first post'),
    ('second post', now() - '20 days'::INTERVAL, 'the second post'),
    ('third post', now() - '19 days'::INTERVAL, 'the third post'),
    ('fourth post', now() - '18 days'::INTERVAL, 'the fourth post'),
    ('fifth post', now() - '17 days'::INTERVAL, 'the fifth post'),
    ('sixth post', now() - '16 days'::INTERVAL, 'the sixth post'),
    ('seventh post', now() - '15 days'::INTERVAL, 'the seventh post'),
    ('eighth post', now() - '14 days'::INTERVAL, 'the eighth post'),
    ('ninth post', now() - '13 days'::INTERVAL, 'the ninth post'),
    ('tenth post', now() - '12 days'::INTERVAL, 'the tenth post'),
    ('eleventh post', now() - '11 days'::INTERVAL, 'the eleventh post'),
    ('twelth post', now() - '10 days'::INTERVAL, 'the twelth post'),
    ('thirteenth post', now() - '9 days'::INTERVAL, 'the thirteenth post'),
    ('fourteenth post', now() - '8 days'::INTERVAL, 'the fourteenth post'),
    ('fifteenth post', now() - '7 days'::INTERVAL, 'the fifteenth post'),
    ('sixteenth post', now() - '6 days'::INTERVAL, 'the sixteenth post'),
    ('seventeenth post', now() - '5 days'::INTERVAL, 'the seventeenth post'),
    ('eighteenth post', now() - '4 days'::INTERVAL, 'the eighteenth post'),
    ('ninteenth post', now() - '3 days'::INTERVAL, 'the ninteenth post'),
    ('twentieth post', now() - '2 days'::INTERVAL, 'the twentieth post');

COMMIT;