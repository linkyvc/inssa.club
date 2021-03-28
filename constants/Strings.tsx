import LocalizedStrings from 'react-localization';

export const Strings = {
  project: new LocalizedStrings({
    en: {
      title:
        'Inssa Club - Share your full Clubhouse Profile with a single link',
      description: 'Clubhouse profile with a single link.',
    },
    ko: {
      title: '인싸클럽 - 클럽하우스 프로필 링크',
      description: '클럽하우스 프로필 그대로, 링크 하나로.',
    },
  }),
  main: new LocalizedStrings({
    en: {
      title: () => (
        <>
          Share your
          <br />
          <span>Clubhouse Profile</span>
          <br />
          with a single link 🚀
        </>
      ),
      promotion: () => (
        <>
          Did you know that people are{' '}
          <span style={{ display: 'inline-block' }}>
            more likely to follow you
          </span>
          <br />
          <strong>when they see your profile</strong> in their eyes
          <br />
          than just hearing your nickname?
        </>
      ),
      alreadyHere: () => (
        <>
          <strong>
            Well, your profile is already here!
            <br />
            Same look as in the original app, it's better than the offical web
            profile.
          </strong>
          <br />
          You can get access to it when you submit your username below.
        </>
      ),
      usernamePlaceholder: 'Your clubhouse username',
      emailPlaceholder: 'Your email',
      buttonText: 'Create your profile',
      checkboxText: () => (
        <>
          Psst! 🤫
          <br />
          We are quietly making a new profile service, called Linky.
          <br />
          <strong>
            Check if you want to have an invite first when Link is ready!
          </strong>
        </>
      ),
    },
    ko: {
      title: () => (
        <>
          클럽하우스 프로필을
          <br />
          <span>링크 하나로</span>
          <br />
          웹으로 공유하세요 🚀
        </>
      ),
      promotion: () => (
        <>
          닉네임을 외치면서 스스로를 홍보하는 것보다,
          <br />
          <strong>
            프로필 링크를 츤츤하게 건네면{' '}
            <span style={{ display: 'inline-block' }}>
              팔로우당할 확률이 높다는 것,
            </span>
          </strong>
          <br />
          알고 계셨나요!
        </>
      ),
      alreadyHere: () => (
        <>
          <strong>
            클럽하우스 앱에 있는 디자인을 그대로 옮겨서,
            <br />
            공식 웹 프로필보다 더 멋진 인상을 주지요.
          </strong>
          <br />
          사실 여러분의 프로필은 이미 여기 있어요.
          <br />
          사용자 이름만 입력하면 바로 볼 수 있죠!
        </>
      ),
      usernamePlaceholder: '클럽하우스 사용자 이름을 입력하세요',
      emailPlaceholder: '이메일을 입력하세요',
      buttonText: '프로필 생성하기',
      checkboxText: () => (
        <>
          쉿! 🤫
          <br />
          저희는 몰래 링키라고 하는 새로운 프로필 서비스를 준비하고 있어요.
          <br />
          <strong>링키가 출시되자마자 먼저 초대장을 받고 싶다면 체크!</strong>
        </>
      ),
    },
  }),
  promotion: new LocalizedStrings({
    en: {
      profileLikeThis: '✨Profile like this 🙌',
    },
    ko: {
      profileLikeThis: '✨이런 프로필을 만들 수 있어요 🙌',
    },
  }),
  profile: new LocalizedStrings({
    en: {
      openAppToFollowMe: 'Open app to follow me',
    },
    ko: {
      openAppToFollowMe: '클럽하우스로 팔로우하기',
    },
  }),
};
