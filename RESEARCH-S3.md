# DEPLOYMENT AWS WITH S3

## Overview

You can get started with Amazon S3 by working with buckets and objects. A bucket is a container for objects. An object is a file and any metadata that describes that file.

To store an object in Amazon S3, you create a bucket and then upload the object to the bucket. When the object is in the bucket, you can open it, download it, and move it. When you no longer need an object or a bucket, you can clean 
up your resources.

## Step 1: Create your first S3 bucket

After you sign up for AWS, you're ready to create a bucket in Amazon S3 using the AWS Management Console. Every object in Amazon S3 is stored in a bucket. Before you can store data in Amazon S3, you must create a bucket.

1. Sign in to the AWS Management Console and open the Amazon S3 console at https://console.aws.amazon.com/s3/.

2. In the left navigation pane, choose Buckets.

3. Choose Create bucket.

4. For Bucket name, enter a name for your bucket.

5. For Region, choose the AWS Region where you want the bucket to reside.

6. Object Ownership

    `Please ACLs disabled`

7. Block Public Access settings for this bucket

    We recommend that you keep all settings enabled, unless you know that you need to turn off one or more of them for your specific use case. For more information about blocking public access

8. Bucket Versioning

    To disable or enable versioning on your bucket, choose either Disable or Enable.
    `choose Disable`

9. Choose Create bucket.

## Step 2: Upload an object to your bucket

1. On the Objects tab for your bucket, choose Upload.

2. Under Files and folders.

    `choose Add files`

3. Choose a file to upload, and then choose Open.

4. Choose `Upload`.

## Step 3: Configure Permissions

1. Block public access (bucket settings)
    
    Uncheck `Block all public access`

2. Add Bucket policy

        {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::webfoundation5-taskmanager/*"
            }
        ]
    }

## Step 4: Browse website

    http://webfoundation5-taskmanager.s3-website-ap-southeast-1.amazonaws.com