import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from 'layouts/main.layout';
import { MyPost } from 'interfaces/post';
import { NextPageContext } from 'next';
import Button from '@material-ui/core/Button';

import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Pagination from '@material-ui/lab/Pagination';

interface PostsPageProps {
  posts: MyPost[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    card: {
      maxWidth: 345,
    },
    padding: {
      marginTop: 40,
      marginBottom: 40,
    },
  })
);

export default function Posts({ posts }: PostsPageProps) {
  const classes = useStyles();

  const [page, setPage] = useState(1);

  const itemsInPage = 6;

  const [currentRange, setCurrentRange] = useState({
    start: 0,
    end: 5,
  });

  const renderPage = function (posts: MyPost[]) {
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="flex-start" spacing={2}>
            {posts.map((post: MyPost) => (
              <Grid key={post.id} item>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://images.unsplash.com/photo-1595503240812-7286dafaddc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=776&q=80 776w"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title} + {post.id}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link
                      href={{
                        pathname: `/posts/[id]`,
                      }}
                      as={`/posts/${post.id}`}
                    >
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    setCurrentRange({
      start: newPage * itemsInPage - itemsInPage,
      end: newPage * itemsInPage,
    });
  };

  return (
    <MainLayout>
      <h1>Posts Page</h1>
      {renderPage(posts.slice(currentRange.start, currentRange.end))}
      <Grid container justify="center" spacing={2} className={classes.padding}>
        <Pagination
          count={Math.ceil(posts.length / itemsInPage)}
          page={page}
          color="primary"
          variant="outlined"
          shape="rounded"
          onChange={handleChangePage}
        />
      </Grid>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();
  return {
    props: {
      posts,
    },
  };
}
