const a=[.01,.89,.22,.05,.23,.03,.46,.57,.03,.14,.07,.53,.15,.12,.11,.47,.42,.57,.73,.59,.76,.21,.99,.78,.04,.03,.29,.85,.97,.45,.25,.19,.02,.01,.51,.85,.09,.11,.74,.12,.3,.16,.92,.76,.12,.06,.61,.02,.43,.02,.62,.13,.85,.09,.07,.13,.04,.09,.93,.17,.94,.08,.1,.25,.84,.42,.06,.11,.13,.36,.46,.48,.21,.56,.2,0,.16,.79,.11,.22,.22,.6,.35,.11,.18,.82,.08,.5,.19,.01,.24,.23,.13,.12,.68,.1,.05,.01,.49,.69,.13,.08,.47,.06,.12,.03,.94,.63,.03,.16,.42,.15,.26,.01,.95,.08,.16,.23,.02,.04,.07,.57,.16,.89,.53,.07,.15,.07,.23,.04,.33,.48,.48,.14,.32,.38,.57,0,.33,.03,.16,.04,.07,.09,.03,.85,.53,.17,.11,.25,.1,.33,.2,0,.37,.24,.87,.01,.02,.13,.2,.14,.11,.01,.14,.46,.56,.17,.07,.06,.05,.4,.78,.67,.01,.96,.04,.93,.35,.21,.77,.19,.04,.11,.04,0,.22,.05,.89,.38,.29,.52,.01,.15,.07,.16,.1,.61,0,.44,.61,.06,.05,.5,.04,.49,.46,.19,.26,.03,.49,.13,.94,.12,.09,.83,.46,.25,.67,.59,.03,.29,.44,.23,.03,.05,.39,.31,.66,.13,.49,.25,.27,.17,.01,.05,.15,.14,.42,.2,.38,.18,.27,1,.06,.76,.83,.7,.83,.09,.59,.29,.03,.09,.08,.21,.78,.24,.09,.12,.25,.36,.08,.06,.04,.15,.24,.08,.24,.65,.5,.01,.04,.16,.01,1,.62,.65,.49,.7,.23,.51,.17,.92,.01,.04,.68,.13,.8,.95,.04,.04,.06,.42,.2,.9,.31,.05,.42,.48,.59,.16,.77,.86,.66,.11,.52,.28,.23,.18,.3,.12,.28,.05,.54,.54,.36,.48,.22,.41,.08,.97,.27,.06,.25,.14,.04,.79,.16,.05,.14,.11,.26,.22,.21,.54,.3,.33,.31,.75,.1,.82,.18,.66,.06,.17,.44,.25,.62,.1,.08,.56,.1,.08,.11,.08,.18,.14,.22,.33,.5,.21,.07,.59,.25,.07,.42,.06,.57,.55,.88,.54,.04,.21,.73,.64,.75,.12,.41,.41,.28,.56,.14,.77,.66,.13,.77,.77,.05,.05,.1,.05,.16,.06,.03,.14,.05,.97,.47,.29,.62,.64,.14,.12,.05,.8,.27,.17,.03,.19,.12,.87,.93,.1,.5,.24,.07,.06,.22,.18,.79,0,.21,.04,.82,.1,.02,.25,.49,.9,.16,.48,.11,.01,.53,.19,.69,.07,.1,.35,.09,.07,.08,.44,.28,.28,.13,.01,.93,.01,.24,.08,.05,.73,.93,.25,.5,.09,.34,.11,.15,.05,.01,.68,.63,.12,.66,.85,0,.25,.65,.08,.42,.04,.97,.05,.23,.43,.14,.86,.05,.06,.12,.08,.12,.65,.02,.67,.33,.18,.6,.56,.54,.51,.31,.07,.15,.24,.24,.74,.38,.84,.17,.57,.09,.23,.02,.09,.02,.69,.06,.76,.08,.7,.45,.59,.5,.18,.54,.07,.43,.19,.28,.69,.43,.07,.87,.9,.77,.05,.07,.18,.33,.56,.02,.15,.91,.09,.5,.93,.96,.55,.02,.84,.55,.47,.96,.76,.07,.47,.71,.04,.22,.29,.39,0,.02,.95,.65,.7,.09,.92,.17,.39,.08,.83,.32,.04,.6,.53,.1,.34,.2,1,.03,.25,.43,.48,.28,.42,.27,.06,.04,.85,.04,.24,.12,.68,.39,.04,.65,.38,.18,.3,.08,0,0,.44,.47,.07,.37,.2,.21,.96,.2,.23,.36,.02,.32,.52,.68,.17,.43,.52,.83,.31,.16,.71,.14,0,.51,.34,.79,.3,.75,0,.29,.7,.08,.58,.12,.39,.45,.66,.07,.55,.04,.62,.41,.9,.4,.14,.14,.73,.57,.13,.51,.09,.01,.04,.01,.01,.08,.15,.05,.62,.13,.51,.68,.68,.29,.58,.09,.12,.7,.16,.96,.21,.28,.19,.07,.37,.3,.41,.51,.67,.16,.16,.36,.85,.61,.49,.7,.06,.39,.03,.03,.03,.02,.65,.54,.4,.25,.08,.02,.1,.59,.16,.12,0,.08,.1,.13,.03,.59,.99,0,.81,.82,.47,.06,.55,.8,.09,.26,.19,.29,.84,.9,.5,.07,0,.11,.01,.3,.23,.49,.51,0,.1,.01,.01,.03,.58,.05,.33,.09,.35,.62,.95,.08,.23,.11,.94,.02,.16,.07,.05,.07,.35,0,.84,.13,.99,.03,.05,.3,.36,.9,.76,.82,.49,.02,.34,.97,.25,.11,.31,.22,.01,.54,.42,.13,.01,.9,.01,.06,.33,.11,.58,.06,.43,.3,.1,.1,.08,.02,.64,.34,.48,.3,.65,.12,.23,.05,.16,.17,.12,.24,.25,.02,.85,.29,.1,.54,.05,.38,.43,.33,.77,.5,.65,.08,.08,.28,.42,.14,.44,.63,.16,.02,.67,.26,0,.6,.06,.75,.35,.69,.56,.76,.05,.26,.33,.11,.65,.4,.06,.54,.83,.5,.23,.01,.34,.01,.15,.76,.38,.08,.1,.28,.09,.25,.8,.91,.18,.08,.84,.15,.36,.06,.17,.25,.49,.13,.78,.35,0,.22,.35,.46,.41,.18,.84,.39,.56,.88,.4,.98,.03,.56,.25,.02,.19,.02,.04,.96,.02,.13,.47,.04,.78,.41,.5,.08,.14,.1,.59,.46,.01,.58,.84,.68,.88,.01,.14,.23,.24,0,.34,.01,.95,.67,.17,.2,.52,.04,.74,.56,.82,.24,.2,.46,.34,.08,.22,.18,.36,.03,.38,.38,.3,.11,.13,.25,.31,.37,.98,.89,.14,.02,.71,.34,.05,.71,.59,.18,.04,.19,.68,.13,.82,.22,.82,.04,.32,.11,.5,.15,.87,.03,.95,.53,.85,.02,.53,.23,.13,.72,.29,.31,.03,.46,.71,.03,.83,.1,.16,.32,.08,.13,.21,.55,.09,.19,.07,.87,.04,0,.79,.16,.33,.08,.42,.91,.88,.79,.21,.34,.32,.27,.93,.88,.83,.64,.67,0,.71,.42,.04,.69,.37,.76,.82,.31,.2,.28,.35,.15,.5,.15,.15,.71,.02,.19,.16,.12,.72,.03,.37,.26,.3,.6,.02,.39,.09,.03,.97,.16,.97,.67,.24,.71,.18,.63,.99,.27,.37,.98,.25,.43,.54,.31,.08,.03,.11,.16,.96,.23,.02,.51,0,.03,.09,.78,.97,.17,.34,.42,.17,.08,.69,.39,.08,.23,.02,.06,.32,.68,.22,.2,.98,.09,.99,.99,.68,.97,.67,.52,.1,.38,.92,.06,.73,.48,.11,.24,.19,.06,.16,.46,.43,.48,.91,.06,.19,.05,.24,.17,.61,.03,.09,.15,.41,.79,.2,.72,.05,.75,.03,.18,.21,.02,.28,.65,.17,.21,.41,.17,.82,.56,.13,.15,.66,.56,.26,.04,.86,.05,.23,.03,.15,.37,.92,.09,.03,.04,.44,.39,.43,.96,.06,.5,.02,.41,.86,.02,.94,.04,.01,.08,.14,.15,.1,.01,.41,.07,.08,.12,.4,.12,.1,.36,.2,.03,.3,.05,.8,.28,.23,.39,.75,.11,.49,.95,.23,.11,.04,.45,.22,.67,.4,.52,.38,.1,0,.09,.1,.09,.01,.32,.3,.04,.12,.13,.07,.17,.36,.17,.35,.15,.03,.99,.79,.26,.86,.35,.07,.91,.19,.42,.24,.15,.02,.05,.13,.21,.95,.11,.15,.84,.71,.03,.72,.21,.07,.01,.43,.13,.04,.08,.04,.18,.05,.04,.71,.01,.76,.03,.02,.03,.02,.72,.15,.18,.86,.4,.22,.74,.04,0,.11,.98,.5,.61,.9,.23,.57,.16,0,.08,.36,.04,.45,.35,.75,.55,0,.29,.17,.14,.01,.09,.35,.12,.05,.14,.36,.36,.01,.9,.29,.06,.21,.81,.37,.47,.11,.32,.09,.02,.08,.97,.05,.96,.02,.87,.78,.07,.83,.05,.16,.22,.12,.22,.49,.56,.02,.09,.05,.62,.7,.47,.39,.96,.03,.12,.1,.38,.49,.39,.28,.57,.86,.66,.35,.69,.09,.54,.19,.27,.1,.4,.54,.16,.09,.61,.3,.04,.16,.46,.08,.21,.02,0,.02,.7,.08,.44,.11,.09,.14,0,.39,.87,.25,.12,.29,.35,.1,.2,.08,.04,.18,.09,.27,.33,.73,.64,.41,.99,.32,.27,.98,.1,.4,.01,.57,.11,.05,.53,.04,.92,.26,.05,.93,.72,.31,.09,.06,.22,.43,.66,.3,.02,.07,.71,.32,.33,.01,.05,.12,.42,.3,.17,.06,.59,.47,.49,.23,.36,.78,.05,.07,.53,.69,.03,.62,.2,.05,.13,.78,.04,.56,.1,.08,.01,0,.18,.49,.81,.1,.45,.11,.65,.39,.6,.84,.68,.03,.02,.7,.78,.04,.11,.11,.02,.46,.51,.95,.79,.68,.39,.26,.01,.05,.99,.14,.15,.07,.95,.38,.67,.57,.27,.4,.05,.05,.13,.99,.1,.03,.93,.02,.19,.01,.05,.37,.2,.96,.41,.12,.37,.61,.73,.58,.65,.05,.97,.09,.61,.19,.04,.8,.67,.03,.18,.14,.55,.96,.18,.93,.27,.22,1,.13,.11,.74,.16,.02,.35,.5,.43,.5,.71,.84,.1,.04,.86,.17,.07,.05,.06,.08,.13,.82,.41,.03,.13,.14,.13,.57,.13,.11,.09,.13,.91,.75,.06,.41,.06,.32,.07,.16,0,.37,.04,.3,.37,.14,.99,.29,.02,.42,.25,.15,.21,.3,.19,.54,.09,.13,.04,.04,.03,.11,.25,.42,.06,.17,.91,.88,.18,.03,.04,.34,.21,.95,.2,.04,.09,.53,.39,.17,.82,.21,.27,.13,.81,.13,.11,.3,.3,.25,.1,.31,.14,.81,.17,.15,.17,.16,.63,.54,.03,.47,.19,.09,.02,.05,.27,.05,.61,.26,.92,.21,.53,.2,.68,.17,.29,.86,.08,.78,.17,.37,.38,.26,.02,.04,.03,.04,.13,.56,.45,.22,.57,.47,.06,.04,.26,.06,.02,.38,.14,.04,.22,.57,.05,.68,.64,.26,.22,.07,.1,.38,.16,.04,.06,.17,.19,.17,.48,.93,.03,.18,.15,0,.26,.03,.46,.05,.4,.33,.34,.22,.36,.94,.6,.17,.69,.28,.33,.07,.95,.05,.1,.3,.66,.02,.42,.35,.02,.05,.1,.69,.53,.22,.14,.61,.08,.33,.33,.55,.26,.12,.36,1,.92,.25,.44,0,.05,.89,.19,.2,.44,0,.04,.81,.31,.12,.28,.15,.12,.31,.55,.29,.16,.02,.04,.14,.18,.36,.15,.99,.22,.33,.24,.2,.57,.03,.26,.05,.53,.47,.76,.07,.52,.15,.15,.07,.57,.11,.95,.61,.35,.25,.06,.17,.65,.04,.22,.44,.22,.68,.82,.31,.19,.08,.12,.13,.65,.38,.03,.69,.01,.16,.91,.16,.05,.15,0,.57,.05,.58,.28,.12,.03,.23,.32,.99,.7,.67,.06,.7,.07,.01,.08,.15,.32,.27,.11,.14,.22,.11,.07,.72,.61,.22,.74,.06,.45,.16,.13,.07,.52,.92,.99,.4,.52,.63,.93,.57,.38,.02,.04,.15,.44,.52,.53,.04,.89,.32,.5,.43,.29,.4,.52,.2,.03,.69,.75,.05,.72,.4,.28,.57,.58,.44,.71,.1,.04,.41,.07,.19,.01,.11,.15,.11,.02,.33,.06,.13,.12,.14,.14,.03,.16,.29,.02,.48,.18,.07,.05,.05,.45,.24,.11,.98,.27,.14,.91,.15,.18,.22,.03,.19,.01,.29,.06,.28,.27,.99,.13,.09,.15,.42,.19,.44,.13,.04,.6,.08,.73,.13,.15,.05,.01,.31,.28,.77,.02,.05,.97,0,.38,.16,.01,.04,.4,.41,.09,.28,0,.08,.01,.96,.53,.53,.07,.17,.18,.88,.17,.14,.18,.12,.03,.01,.04,.17,.07,.45,.45,.04,.13,.43,.07,.16,.46,.14,.76,.17,.18,.81,.01,0,.26,.69,.01,.68,.29,.45,.2,.33,.17,.07,.06,.01,.12,.94,.05,.08,.69,.05,.12,.75,.57,.09,.06,.04,.55,.26,.93,.05,.84,.15,.05,0,.09,.16,.17,.2,.13,.9,.28,.24,.12,.28,.19,.07,.27,.08,.08,.16,.16,.07,.94,.6,.73,.08,.1,.11,.1,.06,.58,.23,0,.48,.06,.07,.08,.13,.74,.41,.31,.55,.1,.09,.51,.56,.62,.96,.26,.15,.85,.09,.01,.32,.48,.61,.19,.05,.58,.01,.16,.05,.14,.05,.08,.25];export{a as pvalData};
