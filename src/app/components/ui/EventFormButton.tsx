

import Link from 'next/link';
import Button from './Button';

const EnterFormButton = () => {
  return (
    <Link href="/event-form">
      <Button>Enter Event Form</Button>
    </Link>
  );
};

export default EnterFormButton;

