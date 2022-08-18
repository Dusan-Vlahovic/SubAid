import React from "react";
import { ReactNode } from "react";

export interface pastActivity {
  date?: string;
  desc?: string;
  pasted?: boolean;
}

export interface patient {
  avatar?: string;
  id?: string;
  name?: string;
  desc?: ReactNode;
}

export interface notification {
  title?: string;
  content?: ReactNode;
}

export const PASTACTIVITIES: pastActivity[] = [
  {
    date: '07 Apr',
    desc: 'Prescription Refill',
    pasted: true,
  },
  {
    date: '07 Apr',
    desc: 'Blood Test Results',
    pasted: true,
  },
  {
    date: '07 Apr',
    desc: 'Backround medical info',
    pasted: true,
  },
  {
    date: '10 Feb',
    desc: 'Lorem Ipsum'
  },
  {
    date: '11 Jan',
    desc: 'Lorem Ipsum'
  },
  {
    date: '05 Jan',
    desc: 'Lorem Ipsum'
  },
  {
    date: '02 Jan',
    desc: 'Lorem Ipsum'
  },
];

export const PATIENTS: patient[] = [
  {
    avatar: '/assets/images/avatar-2.png',
    id: 'ID 000',
    name: 'Schmidt Ana',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: '/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p className='mb-4'>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
];

export const NOTIFICATIONS: notification[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p className='mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonuy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, set diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum odlor sit amet. Lorem ipsum odlor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magana aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.</p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consetetur adipiscing elit, set diam nonummy nubh euismod tincidunt ut laoreet dolore magna aliquam erat volupat.</p>
    </>
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p className='mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonuy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, set diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum odlor sit amet. Lorem ipsum odlor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magana aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.</p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consetetur adipiscing elit, set diam nonummy nubh euismod tincidunt ut laoreet dolore magna aliquam erat volupat.</p>
    </>
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p className='mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonuy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, set diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum odlor sit amet. Lorem ipsum odlor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magana aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.</p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consetetur adipiscing elit, set diam nonummy nubh euismod tincidunt ut laoreet dolore magna aliquam erat volupat.</p>
    </>
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p className='mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonuy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, set diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum odlor sit amet. Lorem ipsum odlor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magana aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.</p>
      <p className='mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consetetur adipiscing elit, set diam nonummy nubh euismod tincidunt ut laoreet dolore magna aliquam erat volupat.</p>
    </>
  },
]