import LocalizedStrings from 'react-localization';

export const Strings = {
  project: new LocalizedStrings({
    en: {
      title: 'Inssa Club',
      description: 'Create your full clubhouse profile',
    },
    ko: {
      title: '인싸클럽',
      description: '링크 하나로, 클럽하우스 프로필을 그대로.',
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
          <strong>Well, your profile is already here!</strong>
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
};
