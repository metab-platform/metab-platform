const a=[.42,.52,.14,.61,.75,.36,.38,.97,.84,.31,.07,.24,.67,.59,.07,.79,.45,.78,.22,.7,.16,.89,.35,.14,.62,.94,.43,.33,.57,.69,.87,.53,.6,.5,.45,.93,.48,.35,.55,.59,.2,.82,.7,.93,.24,.66,.56,.6,.97,.29,.54,.34,.59,.76,.87,.06,.5,.71,.04,.73,.75,.97,.99,.05,.13,.45,.86,.19,.14,.17,.67,.62,.59,.02,.58,.1,.12,.97,.41,.03,.9,.83,.45,.74,.01,.57,.54,.97,.41,.95,.81,.13,.9,.22,.01,.59,.58,.35,.41,.71,.61,.73,.51,.15,.78,.05,.46,.89,.52,.54,.62,.87,.73,.27,.36,.72,.3,.57,.69,.88,.03,.29,.68,.03,.63,.73,.81,.58,.94,.99,.64,.63,.51,.81,.17,0,.02,.27,.73,.32,.75,.7,.47,.57,.94,.91,.51,.94,.48,.72,.76,.43,.01,.13,.74,.41,.87,.53,.51,.14,.39,.41,.89,.9,.85,.87,.26,.45,.29,.76,.73,.58,.99,.42,.74,.7,.67,.87,.47,.94,.41,.63,.22,.66,.91,.92,.74,.94,.42,.01,.06,.77,.66,.81,.53,.5,.66,.36,.77,.28,.18,.95,.82,.68,.82,.94,.39,.13,.72,.39,.9,.82,.14,.63,.63,.4,.69,.95,.76,.58,.81,.78,.12,.42,.51,.81,.76,.83,.21,.22,.33,.24,.69,.32,.87,.76,.64,.46,.05,.29,.45,.41,.54,.48,.94,.46,.11,.01,.29,.11,.59,1,.81,.54,.9,.53,.7,.58,.41,.68,.11,.77,.32,.75,.71,.91,.23,.56,.08,.56,.32,.41,.98,.16,.39,.74,.41,.36,.16,.72,.35,.66,.41,.99,.58,.24,.56,.58,.9,.75,.59,.53,.68,.45,.55,.6,.03,.04,.14,.31,.05,.78,.21,.23,.73,.49,.28,.36,.29,.03,.9,.19,.34,.82,.92,.34,.58,.96,.3,.39,.58,.29,.57,.8,.3,.34,.67,.3,.48,.34,.21,.35,.19,.35,.9,0,.24,.43,.35,.76,.75,.41,.1,.04,.73,.58,.69,.58,.42,.75,.94,.76,.98,.85,.9,.27,.93,.04,.57,.8,.68,.94,.38,.71,.01,.93,.12,.55,.5,.29,.46,.58,.82,.27,.79,.26,.53,.93,.61,.2,.27,.52,.64,.68,.08,.27,.07,.61,.36,.59,.31,.44,.53,.17,.22,.41,.65,.48,.36,.42,.01,.77,.3,.74,.05,.21,.57,.81,.56,.89,.33,.25,.3,.29,.54,.97,.98,.52,.43,.17,.93,.75,.29,.87,.43,.67,.71,.58,.28,.8,.68,.49,.87,.76,.92,.4,.01,.69,.68,.99,.57,.75,.78,.52,.46,.66,.55,.46,.96,.99,.4,0,.82,.91,.2,.65,.87,.46,.33,.13,.64,.33,.95,.7,.53,.89,.35,.12,.59,.36,.92,.51,.5,.73,.46,.5,.21,.58,.61,.52,.64,.44,.56,.77,.48,.05,.86,.04,.31,.16,.33,.67,.35,.8,.67,.95,.2,.07,.51,.62,.58,.19,.7,.67,.82,.38,.79,.31,.79,.77,.85,.11,.8,.88,.53,.58,.9,.67,.99,.88,.09,.46,.15,.64,.26,.82,.64,.82,.53,.33,.54,.26,.48,.42,.91,.9,.76,.72,.45,.56,.89,.97,.48,.57,.78,.37,.38,.71,.83,.39,.59,.71,.26,.52,.93,.96,.46,.51,.42,.77,.75,.48,.56,.47,.97,0,.34,.55,.93,.51,.16,.54,.35,.54,.65,.25,.64,.68,.14,0,.91,.3,.77,.01,.8,.61,.34,.54,.32,.74,.39,.77,.52,.44,.72,.71,.28,.56,.58,.35,.13,.6,.49,.62,.52,.62,.99,.64,.45,.25,.34,.44,.5,.93,0,.38,.44,.53,.21,.88,.74,.16,.81,.9,.7,.12,.9,.45,.79,.69,.06,.42,.71,.62,.95,.71,.32,.44,.05,.3,.04,.45,.61,.33,0,.79,.14,.86,.13,.79,.46,.9,.77,.63,.43,.13,.36,.87,.59,.22,.59,.34,.85,.77,.15,.5,.05,.27,.96,.87,.78,.29,0,.78,.44,.47,.72,.61,.04,.5,0,.41,.85,.62,.23,.17,.76,.92,.58,.51,.37,.55,.33,.6,.57,.93,.5,.01,.84,.4,.92,.98,.93,.15,.26,.85,.99,.81,.4,.74,.66,.2,.74,.6,.03,.47,.87,.45,.7,.68,.99,.87,.6,.75,.74,.41,.41,.65,.74,.84,.29,.28,.53,.05,.16,.12,.55,.98,.5,0,.83,.04,.53,.62,.27,.96,.49,.54,.6,.56,.92,.64,.01,.4,.69,.03,.32,.79,.27,.57,.64,.96,.37,.34,.93,.1,.52,.01,.47,.19,.54,.32,.75,.46,.5,.55,.88,.93,.96,.95,.39,.6,.91,.73,.3,.82,.75,.83,.5,.51,.77,.93,.64,.38,.77,.44,.57,.83,.13,.56,.24,.96,.01,.72,.52,.79,.67,0,.71,.01,.02,.66,.46,.74,.68,.35,.55,.8,.44,.65,.54,.59,.66,.75,.21,.89,.91,.87,.71,.15,.53,.95,.27,.01,.24,.09,.7,.07,.84,.91,.87,.57,.49,.39,.05,.76,.75,.45,.96,.28,.38,.74,.82,.54,.47,0,.74,.72,.91,.69,.83,.65,.28,.47,.53,.95,.98,.46,.83,.84,.13,.34,.3,.46,.33,.93,.86,.86,.23,.95,.83,.05,.97,.83,.8,.43,.69,.18,.84,.36,.98,.14,.06,.31,.97,.1,.81,.01,.36,.54,.35,.38,0,.23,.97,.29,.68,.6,.4,.53,.23,.84,.93,.09,.68,.41,.76,.75,.67,.76,.49,.5,.85,.07,.7,.58,.32,.4,.48,.99,.99,.44,.62,.51,.92,.26,.57,.6,.61,.83,.27,.45,.63,.66,.21,.33,.93,.88,.15,.29,.85,.34,.66,.13,.41,.8,.7,.85,.77,.49,.35,.57,.58,.59,.65,.02,.43,.95,.59,.77,.16,.19,.08,.72,.45,.47,.3,.15,.83,.22,.87,.82,.47,.86,.51,.67,.99,.93,.76,.39,.46,.97,.4,.4,.26,.14,.75,.33,.18,.27,.21,.51,.36,.03,.11,.87,.47,.27,.65,.92,.29,.69,.33,.43,.54,.54,.41,.24,.45,.67,.82,.58,.54,.56,.46,.57,.96,.04,.73,.53,0,.19,.97,.72,.04,.52,.57,.58,.4,.29,.71,.75,.78,.53,.85,.48,.89,.42,.07,.77,.97,.43,.33,.47,.79,.47,.9,.53,.73,.47,.55,.96,.42,.98,.72,.19,.35,.58,.04,.66,.29,.68,.68,.86,.24,.63,.25,.84,.82,.49,.51,.53,.17,0,.83,.97,.75,.91,.95,1,.44,.63,.69,.27,.4,.7,.7,.62,.7,.48,.57,.14,.64,.76,.84,.67,.33,.85,.52,.06,.69,.58,.86,0,.79,0,.28,.75,.14,.67,.14,.2,.47,.58,.95,.12,.8,.81,.78,.85,.48,.66,.4,.64,.61,.74,.66,.98,.89,.71,.61,.37,.54,.46,.89,.73,.23,.9,.26,.99,.64,.66,.75,.93,.72,.45,.88,.23,.74,.62,.75,.87,.13,.72,.2,.5,.92,.65,.92,.81,.06,.52,.6,.42,.78,.95,.74,.43,.02,.45,.81,.64,.4,.76,.65,.61,.76,.62,.42,.58,.49,.69,.52,.75,.82,.85,.27,.8,.98,.44,.73,.6,.26,.45,.69,.81,.14,.44,.74,.72,.26,.65,.45,.7,.92,.15,.93,.84,.92,.1,.61,.59,.59,.7,.77,.88,.02,.8,.2,.57,.73,.86,.65,.94,.57,.21,.25,.1,.6,.96,.42,.51,.17,.03,.82,0,.4,.63,.5,.61,.96,.92,.04,.77,.89,.8,.5,.79,.68,.82,.63,.58,.84,.45,.99,.74,.41,.84,.9,.88,.64,.11,.64,.17,.06,.62,.27,.37,.63,.26,.97,.09,.25,.89,.17,.78,.37,.83,.96,.81,.43,.83,.97,.47,.88,.58,.4,.95,.27,.77,.51,.94,.59,.19,.21,.41,.87,.78,.58,.04,.03,.51,.71,.71,.98,.28,.61,.66,.64,.42,.9,.78,.15,.99,.4,.36,.95,.74,.96,.85,.34,.37,.23,.79,.19,.27,.86,.91,.82,.86,.66,.92,.3,.99,.38,.63,.68,.72,.56,.85,.59,.4,.81,.45,.79,.53,.14,.02,.64,.23,.66,.7,.93,.89,.81,.83,.03,.21,.19,.74,.77,.54,.47,.29,.5,.32,.98,.75,.24,.93,.17,.77,.9,0,.11,.09,.72,.22,.36,.58,.2,.96,.44,.3,.72,.62,.34,.77,.44,.51,.04,.03,.64,.87,.65,.3,.16,.26,.31,.67,.98,.69,.12,.83,.71,.35,.23,.7,.98,.22,.13,.65,.05,.41,.08,.2,.88,.1,.95,.79,.72,.11,.79,.84,.87,.49,.63,.52,.33,.22,.89,.64,.92,.85,.42,.2,.37,.92,.62,.61,.35,.97,.18,.9,.81,.84,.91,.12,.78,.74,.77,.05,.65,.93,.52,.43,.39,.24,.38,.43,.5,.55,.95,.7,.37,.85,.78,.9,.73,0,.99,.73,.01,0,.55,.95,.86,.71,.03,.76,.41,.22,.95,.03,.93,.97,.48,.44,.18,.53,.15,.71,.42,.19,.31,.98,.39,.42,.89,.23,.75,.28,.93,.4,.01,.36,.76,.25,.38,.94,.66,.98,.02,.14,.87,.19,.91,.97,.84,.84,.16,.46,.26,.72,.73,.98,.86,.96,.85,.48,.76,.2,.43,.46,.99,1,.15,.62,.9,.3,.92,.93,.71,.98,.71,.8,.91,.84,.67,.15,.86,.85,.31,.39,.18,.5,.48,.35,.21,.57,.6,.2,.89,.73,.78,.2,.22,.67,.71,.21,.32,.77,.57,.92,.69,1,.91,.63,.65,.54,.87,.99,.4,.47,.86,.22,.92,.53,.01,.21,.18,.74,.22,.31,.58,.85,.54,.05,.17,.98,1,.19,0,.74,.92,.96,.42,.74,.17,.76,.07,.82,.33,.96,.69,.15,.54,.98,.01,.28,.34,.47,.63,.71,.44,.98,.06,.73,.53,1,.62,.91,.15,.6,.55,.75,.2,.58,.44,.76,.76,.82,.67,.57,.17,.59,.58,.92,.78,.05,.16,.98,.55,.88,.47,.54,.41,.69,.77,.15,.02,.67,.16,.73,.74,.07,.86,.3,.22,.93,.74,.63,.37,.96,.55,.23,.3,.81,.44,.94,.97,.2,.73,.64,.96,.88,.46,.4,.29,.94,.03,.49,.93,.6,.59,.14,.15,.25,.98,.27,.44,.54,.72,.73,.09,.39,.41,.51,.47,.25,.95,.87,.43,.91,.54,.3,.5,.45,.92,.65,.19,.62,.26,.41,.36,.2,.18,.75,.49,.83,.81,.61,.28,.1,.61,0,.21,.85,.21,.26,.55,.28,.62,.8,.77,.22,.19,.64,.61,.07,.85,.73,0,.11,.12,.53,.54,.85,.56,.36,0,.92,.27,.78,.1,.49,.84,.42,.8,.95,.39,.82,.53,.09,.73,.73,.64,.22,.44,.7,.71,.85,.18,.41,.34,.14,.09,.17,.9,.42,.39,.94,.85,.99,.59,.2,1,.58,.86,.52,.7,.29,.12,.52,.72,.31,.73,.78,.22,.22,.87,.22,.76,.8,.3,.76,.42,.76,.96,.88,.32,.03,.55,.91,.11,.83,.86,.12,.88,.67,.5,.75,0,.69,.79,.6,.46,.83,.09,.77,.75,.14,.85,.46,.78,.96,.76,.9,.93,.74,.66,.47,.77,.63,.76,.95,.1,.3,.68,.1,.99,.14,.67,.21,.34,.48,.5,.46,.19,.79,.45,.62,.85,.43,.85,.64,.62,.35,0,.49,.64,.81,.39,.48,.7,.03,.9,.66,.24,.61,.42,.87,.99,.62,.89,.99,.99,.3,.35,.61,.43,.01,.53,.23,.15,.56,.48,.24,.81,.13,.86,.41,0,.77,.57,.26,.15,.91,.49,.14,.42,.01,.75,.94,.64,.51,.32,.01,.85,.05,.38,.7,.72,.91,.54,.26,.93,.93,.79,.86,.46,.94,.88,.41,.38,.8,.51,.32,.49,.59,.91,.33,.45,.14,.39,.79,.67,.45,.95,.38,.54,.9,0,.51,.79,.3,.51,.55,.04,.33,.64,.23,.71,.03,.6,.89,.51,.37,.02,.57,.7,.94,.62,.49,.87,.77,.55,0,.48,.94,.81,.89,.57,.21,.84,.05,.58,.51,.94,.36,.51,.55,.44,.35,.97,.41,.72,.41,.61,.78,0,.36,.93,.69,.69,.6,.36,.83,.99,.47,.57,.98,.81,.41,.58,.62,.75,.02,.6,.99,.03,.39,.74,.78,.35,.29,.8,.01,.59,.23,.71,.87,.78,.72,.37,.64,.83,.59,.85,.8,.24,.41];export{a as pvalData};
