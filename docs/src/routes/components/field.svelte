<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`components/field.json`);
    const jsdoc = await res.json();

		return { jsdoc };
	}
</script>

<script>
  import { Button, Field, Icon, Input } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  let name = 'Moby Dick'

  export let jsdoc
</script>

<DocHeader title="Field" subtitle="Add functionality and styling to form elements/inputs by grouping components together" />

<Example code={`<script>
  import { Field, Input } from 'svelma'
</script>

<Field label="Name">
  <Input value="Rich Harris" />
</Field>

<Field label="Email" type="is-danger" message="Email is invalid">
  <Input value="john@" />
</Field>

<Field label="Username" type="is-success" message="Username is available">
  <Input value="joey55" />
</Field>`}>
  <div slot="preview">
    <Field label="Name">
      <Input value="Rich Harris" />
    </Field>

    <Field label="Email" type="is-danger" message="Email is invalid">
      <Input value="john@" />
    </Field>

    <Field label="Username" type="is-success" message="Username is available">
      <Input value="joey55" />
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Addons</p>

Multiple controls in a field get attached.  Use <code>expanded</code> property on the control to fill up space on the line.

<Example code={`<script>
  import { Button, Field, Icon, Input } from 'svelma'
</script>

<Field>
  <Input type="search" placeholder="Search" icon="search" />
  <p class="control">
    <Button type="is-primary">Search</Button>
  </p>
</Field>

<Field>
  <Input type="search" placeholder="This is expanded" expanded />
  <p class="control">
    <Button type="is-static">@gmail.com</Button>
  </p>
</Field>

<hr>

<Field>
  <div class="control"><Button><Icon icon="bold"></Icon></Button></div>
  <div class="control"><Button><Icon icon="italic"></Icon></Button></div>
  <div class="control"><Button><Icon icon="underline"></Icon></Button></div>
  <div class="control"><Button><Icon icon="align-left"></Icon></Button></div>
  <div class="control"><Button><Icon icon="align-center"></Icon></Button></div>
  <div class="control"><Button><Icon icon="align-right"></Icon></Button></div>
  <Input expanded icon="comment" placeholder="Text here" />
</Field>

<Field>
  <div class="control"><Button type="is-primary">Button</Button></div>
  <div class="control"><Button type="is-primary"><Icon icon="search" /></Button></div>
</Field>`}>
  <div slot="preview">
    <Field>
      <Input type="search" placeholder="Search" icon="search" />
      <p class="control">
        <Button type="is-primary">Search</Button>
      </p>
    </Field>

    <Field>
      <Input type="search" placeholder="This is expanded" expanded />
      <p class="control">
        <Button type="is-static">@gmail.com</Button>
      </p>
    </Field>

    <hr>

    <Field>
      <div class="control"><Button><Icon icon="bold"></Icon></Button></div>
      <div class="control"><Button><Icon icon="italic"></Icon></Button></div>
      <div class="control"><Button><Icon icon="underline"></Icon></Button></div>
      <div class="control"><Button><Icon icon="align-left"></Icon></Button></div>
      <div class="control"><Button><Icon icon="align-center"></Icon></Button></div>
      <div class="control"><Button><Icon icon="align-right"></Icon></Button></div>
      <Input expanded icon="comment" placeholder="Text here" />
    </Field>

    <Field>
      <div class="control"><Button type="is-primary">Button</Button></div>
      <div class="control"><Button type="is-primary"><Icon icon="search" /></Button></div>
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Groups</p>

Use the <code>grouped</code> property to group controls together. Use the <code>expanded</code> property to make a control take up remaining space.

<Example code={`<script>
  import { Button, Field, Input } from 'svelma'
</script>

<Field grouped>
  <Input type="search" placeholder="Search" icon="search" />
  <p class="control">
    <Button type="is-primary">Search</Button>
  </p>
</Field>

<Field grouped>
  <Input type="search" placeholder="Search" icon="search" expanded />
  <p class="control">
    <Button type="is-primary">Search</Button>
  </p>
</Field>`}>
  <div slot="preview">
    <Field grouped>
      <Input type="search" placeholder="Search" icon="search" />
      <p class="control">
        <Button type="is-primary">Search</Button>
      </p>
    </Field>

    <Field grouped>
      <Input type="search" placeholder="Search" icon="search" expanded />
      <p class="control">
        <Button type="is-primary">Search</Button>
      </p>
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Nested Groups</p>

You can nest fields inside fields. You have to use the <code>expanded</code> property on the <strong>Field</strong> to fill up the remaining space. 

<Example code={`<script>
  import { Button, Field, Input } from 'svelma'
</script>

<Field grouped>
  <Field label="Button">
    <Button type="is-primary">Button</Button>
  </Field>

  <Field label="Name" expanded>
    <Input />
  </Field>

  <Field label="Email" expanded>
    <Input />
  </Field>
</Field>`}>
  <div slot="preview">
    <Field grouped>
      <Field label="Button">
        <Button type="is-primary">Button</Button>
      </Field>

      <Field label="Name" expanded>
        <Input />
      </Field>

      <Field label="Email" expanded>
        <Input />
      </Field>
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Responsive Groups</p>

Add <code>groupMultiline</code> property to allow controls to fill up multiple lines.

<Example code={`<script>
  import { Button, Field, Input } from 'svelma'
</script>

<Field grouped groupMultiline>
  <Input />
  {#each Array(30).fill().map((x, i) => i+1) as num}
    <div class="control">
      <Button>{num}</Button>
    </div>
  {/each}
</Field>`}>
  <div slot="preview">
    <Field grouped groupMultiline>
      <Input />
      {#each Array(30).fill().map((x, i) => i+1) as num}
        <div class="control">
          <Button>{num}</Button>
        </div>
      {/each}
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Positions</p>

Use <code>position</code> property to align Field horizontally.

<Example code={`<script>
  import { Button, Field, Input } from 'svelma'
</script>

<Field position="is-centered">
  <Input />
  <div class="control"><Button type="is-primary">Button</Button></div>
</Field>

<Field grouped position="is-right">
  <Input />
  <div class="control"><Button type="is-primary">Button</Button></div>
</Field>`}>
  <div slot="preview">
    <Field position="is-centered">
      <Input />
      <div class="control"><Button type="is-primary">Button</Button></div>
    </Field>

    <Field grouped position="is-right">
      <Input />
      <div class="control"><Button type="is-primary">Button</Button></div>
    </Field>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>