const a=[.29,.67,.33,.62,.36,.3,.32,.48,.61,.09,.81,.48,.42,.79,.68,.25,.12,.45,.09,.14,.76,.93,.72,.62,.89,.9,.94,.48,.26,.77,.79,.49,.68,.66,.16,.17,.95,.91,.63,.58,.08,.94,.93,.46,.28,.92,.58,.14,.41,.77,.71,.17,.43,.97,.82,.83,.99,.37,.66,.91,.48,1,.95,.33,.89,.96,.75,.97,.61,.97,.01,.99,.94,.26,.51,.24,.73,.62,.61,.43,.41,.66,.46,.9,.37,.99,.57,.93,.5,.92,.38,.24,.48,.93,.72,.71,.53,.92,.91,.61,.63,.97,.69,.35,.94,.45,.84,.73,.78,.72,.85,.81,.64,.11,.8,.82,.84,.41,.47,.67,.59,.28,.88,.58,.97,.94,.8,.9,.84,.93,.35,.6,.54,.81,.57,.05,.82,.73,.41,.19,.9,.25,.74,.72,.13,.29,.77,.92,.66,.75,.9,.88,.27,.36,.34,.94,.45,.75,.38,.82,.97,.76,.94,.52,.56,.85,.08,.57,.7,.95,.29,.49,.51,.13,.55,.21,.17,.76,.87,.89,.53,.48,.35,.24,.76,.63,.32,.15,.98,.6,.41,.35,.95,.97,.97,.83,.98,.95,.77,.9,.99,.86,.96,.78,.21,.77,.43,.84,.68,.35,.41,.58,.81,.94,.27,.28,.75,.42,.15,.95,.97,.63,.66,.84,.61,.93,.44,.19,.51,.55,.5,.85,.93,.25,.27,.34,.91,.99,.46,.35,.92,.85,.4,.7,.36,.6,.77,.29,.39,.1,.9,.36,.65,.87,.82,.6,.38,.96,.69,.25,.18,.27,.94,.8,.89,.97,1,.72,.08,.7,.89,.56,1,.47,.94,.49,.39,.64,.35,.35,.89,.69,.96,.72,.7,.73,.88,.91,.54,.61,.81,.81,.92,.41,.71,.94,.96,.39,.39,.7,.2,.34,.79,.25,.92,.87,.22,.79,.99,.65,.75,.34,.87,.05,.5,.7,.81,.41,.54,.07,.97,.66,.78,.87,.39,.94,.74,.76,.07,.95,.91,.57,.93,.65,.66,.2,.88,.57,.56,.24,.84,.64,.35,.09,.88,.51,.44,.8,.77,.71,.74,.67,.76,.92,.77,.69,.79,.73,.35,.16,.61,.25,.84,.92,.49,.47,.13,.92,.61,.55,.31,.37,.73,.29,.6,.45,.45,.83,.98,.9,.38,.31,.9,.04,.51,.15,.63,.18,.74,.8,.65,.41,.37,.31,.29,.75,.55,.18,.29,.36,.46,.79,.54,.43,.77,.14,.26,.78,.55,.59,.2,.81,.97,.62,.87,.56,.8,.87,.88,.43,0,.64,.28,.43,.75,.91,.6,.51,.69,.75,.59,.22,.68,.11,.66,.36,.74,.96,.83,.79,.97,.95,.88,.7,.28,.54,.91,.96,.74,.36,.52,.85,.68,.26,.89,.91,.4,.86,.36,.37,.58,.94,.44,.8,.64,.85,.53,.34,.73,.88,.89,.88,.63,.89,.85,.82,1,.73,.73,.84,.86,.9,.84,.68,.42,.68,.71,.24,.93,.22,.73,.43,.22,.5,.65,.73,.75,.02,.79,.86,.39,1,.29,.63,.97,.29,.87,.44,.87,.86,.86,.04,.93,.26,.4,.38,.89,.54,.97,.82,.92,.33,.68,.73,.89,.32,.67,.68,.17,.87,.43,.85,.32,.75,.32,.17,.22,.36,.36,.95,.95,.24,.27,.76,.23,.12,.24,.88,.24,.27,.48,.98,.52,.45,.88,.32,.41,.88,.77,.57,.57,.3,.94,.19,.11,.44,.35,.42,.96,.47,.37,.52,.64,.48,.81,.35,.59,.89,.52,.79,.22,.63,.91,.39,.94,.91,.47,.89,.17,.91,.21,.86,.64,.78,.34,.71,.72,.12,.34,.82,.43,.49,.33,.11,.58,.6,.5,.42,0,.28,.09,.98,.59,.37,.02,.51,.72,.53,.61,.16,.8,.44,.33,.31,.76,.48,.61,.56,.8,.7,.6,.76,.62,.76,.68,.63,.84,.94,.19,.53,.72,.76,.36,.32,.36,.76,.63,.9,.34,.98,.75,.68,.34,.93,.62,.57,.69,.32,.86,.35,.46,.71,.95,.21,.57,.53,.91,.75,.62,.79,.85,.8,.33,.77,.3,.54,.81,.37,.39,0,.37,.32,.74,.45,.19,.52,.79,.93,.95,.94,.31,.43,.65,.56,.27,.85,.95,.42,.39,.16,.9,.38,.92,.63,.14,.32,.41,.93,.48,.95,.7,.77,.22,.62,.52,.1,.58,.82,.72,.82,.12,.55,.89,.37,.81,.92,.52,.29,.95,.33,.39,.84,1,.54,.49,.95,.93,.19,.31,.4,.44,.65,.23,.66,.04,.97,.72,.88,.44,.81,.49,.09,.97,.67,.73,.11,.45,.54,.54,.12,.69,.43,.63,.26,.51,.84,.48,.21,.38,.04,.69,.86,.67,.2,.73,.39,.99,.5,.97,.43,.45,.9,.87,.53,.53,.75,.97,.56,.98,.6,.71,.45,.62,.71,.92,.96,.6,.8,.06,.5,.98,.98,.84,.94,.55,.74,.53,.11,.13,.06,.87,.05,.93,.92,.85,.96,.93,.36,.59,.9,.81,.53,.25,.15,.44,.97,.75,.13,.71,.78,.46,.82,.45,.22,.87,.54,.62,.09,.75,.24,.9,.78,.3,.84,.9,.73,.94,.37,.73,.39,.85,.17,.48,.45,.46,.54,.57,.33,.53,.18,.91,.63,.36,.46,.25,.4,.93,.19,.95,.56,.09,.35,.5,.69,.48,.1,.13,.81,.76,.08,.89,.82,.75,.82,.82,.91,.41,.56,.82,.58,.74,.74,.97,.51,.36,.51,.09,.16,.1,.95,.27,.5,.37,.71,.07,.66,.75,.94,.09,1,.19,.67,.17,.4,.36,.09,.31,.75,.48,.57,.39,.7,.86,.6,.71,.44,.21,.58,.83,.65,.43,.17,.94,.79,.72,.73,.61,.79,.85,.81,.73,.11,.49,.68,.25,.52,.41,.6,.78,.96,.38,.29,.87,.16,.31,.2,.96,.63,.6,.69,.6,.83,.86,.18,.89,.82,.35,.62,.58,.76,.28,.63,.68,.94,.77,.83,.18,.57,.97,.46,.9,.53,.3,.29,.45,.74,.4,.56,.26,.93,.89,.94,.98,.63,.22,.89,.91,.42,.71,.75,.63,.97,.18,.15,.39,.36,.43,.98,.36,.64,.51,.84,.18,.74,.06,.27,.61,.61,.31,.7,.86,.64,.46,.63,.26,.89,.93,.75,.08,.33,.56,.67,.84,.64,.02,.93,.96,.87,.48,.76,.54,.89,.72,.98,.17,.69,.28,.91,.68,.45,.28,.53,.47,.85,.74,.6,.04,.62,.49,.72,.75,.3,.24,.45,.54,.88,.41,.48,.4,.6,.84,.38,.48,.9,.14,.25,.5,.98,.61,.69,.21,.33,.5,.62,.41,.46,.26,.72,.95,.58,.38,.56,.43,.73,.41,.79,.24,.7,.54,.86,.37,.26,.58,.4,.75,.36,.48,.63,.63,.99,.78,.78,.86,.14,.18,.19,.18,.6,.3,.6,.51,.81,.74,.22,.94,.2,.27,.95,.46,.36,.86,.57,.66,.34,.52,.29,.73,.62,.03,.79,.97,.3,.74,.77,.82,.13,.84,.7,.17,.94,.41,.72,.75,.85,.12,.65,.11,.73,.03,.06,.84,.79,.16,.43,.91,.04,.82,.95,.64,.74,.37,.65,.93,.93,.69,.84,.83,.79,.81,.17,.88,.4,.04,.31,.72,.2,.52,.96,.96,.54,.12,.72,.12,.33,1,.63,.77,.93,.67,.76,.19,.7,.49,.88,.65,.96,.56,.44,.28,.55,.89,.67,.19,.92,.32,.66,.49,.89,.08,.95,.22,.98,.53,.1,.08,.67,.79,.62,.95,.41,.76,.29,.85,.42,.13,.54,.52,.6,.37,.13,.9,.69,.79,.19,.09,.82,.4,.64,.69,.24,.78,.5,.21,.93,.97,.51,.34,.73,.43,.65,.34,.77,.83,.4,.58,.75,.87,.44,.72,.29,.64,.42,.73,.96,.42,.56,.48,.35,.29,.42,.68,.28,.36,.97,.49,.03,.46,.46,.49,.8,.15,.93,.83,.96,.26,.65,.24,.39,.99,.72,.59,.55,.73,.7,.43,.34,.6,.8,.98,.61,.71,.52,.84,.89,.97,.58,.76,.88,.72,.36,.23,.5,.28,.52,.59,.57,.38,.86,.7,.77,.61,.91,.89,.97,.27,.82,.16,.5,.77,.84,.38,.7,.81,.39,.79,.05,1,.87,.3,.13,.55,.53,.67,.81,.79,.47,.57,.99,.65,.41,.35,.38,.23,.18,.65,.41,.78,.38,.31,.52,.9,.25,.54,.56,.43,.67,.19,.53,.14,.45,.25,.36,.32,.18,.84,.73,.24,.61,.84,.65,.53,.52,.53,.95,.93,.22,.81,.67,.88,.88,.79,.22,.82,.55,.7,.71,.13,.95,.63,.22,.92,.53,.37,.32,.21,.96,.42,.02,.4,.07,.57,.9,.09,.24,.41,.94,.83,.64,.09,.68,.23,.43,.84,.28,.73,.66,.04,.21,.84,1,.33,.96,.71,.98,.44,.3,.47,.52,.78,.29,.53,.97,.41,.74,.74,.62,.86,.07,.72,0,.15,.79,.7,.03,.58,.74,.34,.21,.32,.92,.54,.37,.62,.99,.51,.24,.91,.56,.71,.12,.74,.9,.36,.52,.7,.86,.97,.23,.16,.99,.68,.56,.37,.92,.25,.19,.52,.19,.88,.78,.66,.76,.63,.73,.2,.53,.52,.5,.05,.57,.86,.58,.71,.82,.77,.64,.48,.53,.36,.66,.31,.56,.83,.26,.01,.08,.72,.17,.52,.29,.51,.84,.49,.51,.94,.91,.48,.99,.85,.84,.92,.57,.39,.82,.66,.43,.43,.28,.22,.07,.88,.4,.89,.49,.16,.6,.91,.67,.91,.59,.62,.22,.51,.88,.68,.95,.85,.33,.89,0,.77,.4,.76,.94,.07,.85,.93,.69,.93,.81,.76,.22,.42,.15,.5,.72,.89,.43,.34,.29,.85,.56,.74,.45,.94,.89,.38,.81,.61,.76,.29,.27,.93,.63,.82,.55,.66,.67,.53,.56,.62,.16,.03,.77,.47,.15,.94,.67,.97,.94,.71,.7,.35,.79,.76,.68,.27,.93,.27,.76,.25,.64,.69,0,.7,.27,.81,.55,.68,.95,.68,.98,.57,.67,.85,.38,.43,.34,.9,.64,.45,.75,.83,.52,.61,.81,.69,.5,.56,.55,.37,.81,.55,.95,.87,.66,.4,.58,.8,.96,.22,.75,.38,.57,.89,.48,.61,.28,.34,.53,.14,.93,.21,.7,.29,1,.44,.91,.82,.44,.79,.46,.89,.01,.97,.96,.97,.88,1,.51,.53,.9,.43,.85,.91,.25,.43,.68,.79,.75,.75,.64,.25,.15,.58,.9,.43,.12,.58,.63,.22,.04,.63,.83,.89,.39,.54,.9,.63,.41,.92,.28,.85,.86,.82,.5,.42,.79,.83,.84,.23,.19,.68,.53,.79,.69,.79,.24,.6,.87,.96,.45,.73,.71,.92,.44,.84,.78,.56,.86,.58,.96,.63,.32,.55,.26,.76,.58,.35,.4,.08,.67,.41,.65,.42,.29,.97,.63,.27,.91,.75,.85,.73,.95,.58,.41,.79,.69,.64,.72,.78,.9,.92,.82,1,.62,.22,.64,.56,.36,.44,.19,.97,.74,.8,.6,.94,.54,.63,.92,.81,.24,.58,.85,.83,.43,.74,.28,.32,.87,.34,.37,.31,.7,.84,.98,.99,.44,.74,.35,.54,.18,.94,.4,.31,.08,.4,.98,.45,.23,.42,.96,.02,.8,.17,.24,.85,.81,.8,.73,.69,.46,.67,.9,.32,.13,.68,.4,.74,.69,.53,.56,.28,.42,.65,.83,.88,.51,.44,.13,.8,.4,.95,.63,.98,.77,.37,.84,.4,.86,.22,.86,.05,.22,.78,.68,.99,.38,.16,.46,.96,.84,.27,.67,.24,.19,.64,.4,.45,.64,.71,.4,.68,.83,.97,.78,.26,.65,.52,.64,.64,.72,.28,.3,.62,.93,1,.4,.23,.6,.87,.9,.59,.73,.41,.78,.45,.98,.44,.41,.61,.63,.04,.43,.97,.45,.38,.48,.44,.04,.99,.9,.43,.15,.64,.4,.97,.82,.85,.55,.23,.41,1,.6,.14,.24,.55,.62,.5,.77,.95,.7,.92,.92,.8,.79,.5,.69,.28,.62,.17,.89,.57,.2,.71,.33,.71,.72,.07,.59,.9,.19,.46,.94,.66,.75,.86,.4,.3,.39,.92,.79,.86,.48,.62,.9,.92,.11,.7,.44,.99,.8,.78,.62,.9,.3,.98,.45,.47,.78,.53,.68,.88,.85,.91,.79,.2,.84,.09,.59,.34,.67,.9,.97,.81,.77,.3,.86,.72,.25,.75,.91,.13,.49,.62,0,.93,.93,.48,.96,.58,.51,.3,.71,.6,.38,.58,.99,.9,.79,.74,.66,.64,.83,.97,.79,.92,.89,.93,.3,.09,.92];export{a as pvalData};
