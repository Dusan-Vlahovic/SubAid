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
    avatar: './src/assets/images/avatar-2.png',
    id: 'ID 000',
    name: 'Schmidt Ana',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    avatar: './src/assets/images/avatar-3.png',
    id: 'ID 000',
    name: 'Lorem Ipsum',
    desc: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
];

export const NOTIFICATIONS: notification[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: <>
      <p>Ut wisl enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto ddio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nuhil imperdiet doming id qudd mazim placerat facer possim assum. Lorem ispsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susipit obortis nisl ut aliquip ex ea commodo consequat.</p>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, wel illum dolore eu feqiat nulla facilisis.</p>
    </>
  },
]