const a=[.02,.79,.08,.48,.03,.05,.15,.12,.74,.94,.21,0,.66,.13,.11,.51,.29,.41,.87,.3,.58,.75,.48,.16,.46,.11,.78,.27,.32,.88,.79,.28,.23,.7,.72,.96,.05,.21,.59,.14,.89,.08,.11,.82,.27,.42,.91,.18,.41,.71,.89,.02,.88,.08,.15,.15,.76,.1,.43,.06,.42,.67,.08,.97,.95,.99,.23,.21,.26,.94,0,.43,.31,.62,.11,.01,.11,.35,.86,.9,.95,.07,.62,.08,0,.41,.13,.2,.16,.07,.39,.78,.43,.14,0,.56,.16,.75,.01,.51,.89,.36,.15,.84,.86,.49,.01,.07,.22,.39,.52,.57,.74,.41,0,.21,.32,.82,.34,.38,.81,.44,.72,.24,.95,.88,.72,.08,.57,.06,.05,0,.97,.2,.11,.72,.39,.09,.98,.04,.2,.24,.17,.17,.07,.12,.24,.04,.74,.49,.25,.18,.09,.96,.11,.23,.37,.06,.71,.13,.14,.98,.22,.14,.54,.45,.08,.96,.08,.06,.04,.99,.03,.06,.39,.97,.63,.31,.47,.13,.02,.03,.85,.02,.69,.76,.61,.85,.54,.01,.25,.06,.1,.69,.43,.36,.65,.11,.77,.01,.4,.44,.04,.51,.3,.69,.47,.33,.82,.42,.07,.11,0,.2,.1,.28,.69,.24,.8,.61,.86,.51,.71,.31,.23,.05,.04,.76,0,.56,.1,.86,.24,.36,.18,.25,.07,.35,.82,.37,.31,.06,.13,.18,.24,.09,.01,.66,.01,.51,.02,.8,.17,.02,.21,.25,.06,.43,.68,.07,0,.29,.5,.22,.38,.58,.34,.41,.84,.61,0,.12,.14,.18,.42,.1,.36,.41,.12,.45,.28,.41,.44,.42,.09,.27,.6,.07,0,.08,.07,.68,.13,.02,.79,.12,.37,.06,.02,.82,.31,.09,.01,.46,0,.85,.12,.73,.18,.29,.03,.33,.62,.21,.02,.72,.41,.36,.16,.41,.12,0,.17,.25,.01,.19,.17,.31,.43,.19,.05,.55,.03,.62,.31,.39,.83,.56,.39,.09,.67,.09,.88,.69,.06,.13,.66,.44,.11,.39,.4,.07,.42,.06,.28,.25,.99,.7,.63,.17,.83,0,.2,.16,.45,.17,.08,.03,.7,.01,.55,.38,.77,.04,.3,0,.14,.09,.63,.28,.82,.48,.93,.13,.93,.42,.15,.38,.97,.41,.53,.15,.44,.56,.97,.05,.65,.62,.21,.78,0,.05,.38,.74,.54,.94,.14,.49,.6,.85,.12,.54,.13,.62,.01,.42,.2,.11,.3,.62,.79,.19,.43,.65,.89,.03,.05,.07,.29,.01,.27,.05,.53,0,.23,.02,.35,.1,.03,.59,.6,.18,.18,.33,.74,.87,.03,.07,.44,.13,.64,.85,.18,.72,.93,.8,.91,.05,.01,.8,.05,.34,.39,.31,.22,.05,.82,.9,.05,.11,.02,.03,.91,.8,.38,.27,.2,.71,.41,.76,.69,.12,.97,.63,.5,.89,.36,.21,.5,.18,0,0,.58,.82,.14,.09,.07,.56,.3,0,.18,.14,.76,.07,.2,.36,.5,.79,.08,.75,.33,.03,.08,.48,.72,.26,.1,.26,.13,.15,.94,.12,.01,.16,.7,.05,.99,.83,.85,.23,.11,.1,.03,.23,.16,.03,.06,.7,.07,0,.41,.33,.16,.73,.92,.17,.36,.74,.29,.39,.28,.04,.03,.3,.09,.05,.23,.63,.88,.55,.23,.73,.98,.04,.35,.41,.5,.34,.07,.25,.35,.08,.8,.65,.27,.03,.62,.03,.92,.68,.89,.29,.57,.66,.43,.06,.04,.5,.68,.04,.97,.38,.64,.23,.03,.1,.29,.03,.15,.85,.68,.09,.14,0,.21,.78,.07,.55,.45,.65,.47,.13,.19,.05,.34,.33,.07,.04,.27,.28,.05,.48,.73,.11,.09,.01,.02,.9,.47,.06,.35,.82,.64,.31,.1,.38,.4,.24,.52,.77,.23,.15,.49,.42,.05,.49,.15,.05,.05,.42,.78,.21,.32,.05,.15,.24,.5,.6,.67,.44,.08,.15,.19,.34,.61,.11,.16,.14,.3,.06,.23,.57,.34,.88,.07,.08,.26,.06,.24,.29,.07,.13,.04,.08,.01,.2,.48,.12,.24,.01,.6,.02,.22,.53,.23,.12,.71,.61,.88,.37,.13,.23,.79,.01,.42,.35,.3,.38,.64,.99,.27,.23,.31,.11,0,.79,.8,.01,.42,1,.08,.45,.08,.88,.02,0,.44,.66,.23,.54,.2,.01,.35,.51,.78,.35,.05,.76,.43,.66,.15,.69,.48,.53,.23,.25,.44,.09,.01,1,.36,.4,.01,.88,.18,.23,.11,.28,.69,.28,.48,.97,.2,.14,.22,.09,.26,.2,.83,.27,.07,.38,.48,.31,.38,.11,.05,.2,.04,1,.07,.03,.01,.22,.25,.96,.46,.33,.21,.51,.67,.2,.97,.16,.08,.95,.03,.17,.63,.94,.95,.45,.51,.25,.19,.87,.85,.3,.96,.51,.57,.21,.44,.21,.64,.41,.67,.32,.7,.05,.95,.3,.05,.76,.05,.02,.23,.51,.98,.56,.31,.05,.77,0,.37,.01,.73,.17,.15,.78,.58,.12,.13,.24,.79,.22,.02,.97,.64,.53,.28,.88,.67,.59,.02,.64,.53,.33,.16,.88,.78,.02,.13,.35,.1,.13,.75,.25,.71,.12,.03,.29,.63,.4,.21,.48,.28,.01,.46,.11,.47,.38,.66,.13,.1,.94,.46,.69,.38,.23,.11,.17,.29,.28,.29,.05,.48,.4,.72,.08,.78,0,.12,.15,.09,.43,.1,.15,.46,.23,.12,.52,.53,.2,.46,.54,.83,.38,.14,.89,.09,.36,.65,.72,.23,.11,.03,.03,.71,.49,.07,.07,.15,.07,.26,.46,.15,.31,.87,.18,.95,.06,.4,.07,.08,.5,.26,.83,.33,.05,.34,.38,.24,.07,.57,.08,.08,.69,.13,.5,.23,.44,.23,.94,.72,.96,.1,.02,.53,.11,.24,.17,.03,.15,.21,.34,.12,.11,.32,.82,.05,.14,.79,.22,.35,.25,.12,.73,.24,.23,.26,.08,.14,.14,.45,.5,.01,.38,.05,.68,.02,.16,.2,.46,.86,.56,.66,.8,.72,.5,.47,.93,.3,.84,.41,.54,.93,.03,.06,.3,.15,.73,.18,.11,0,.35,.39,.18,.51,.29,.24,.5,.54,.07,.73,.31,.05,.06,.63,.9,.11,.03,.11,.4,.43,.3,.47,.62,.68,.69,.73,.13,0,.38,.3,.28,.81,.25,.37,.11,.33,.53,.91,.19,.46,.68,.89,.23,.36,.33,.34,.03,.3,.16,.18,.44,.07,0,.6,.05,.13,.32,.01,.95,.35,.68,.16,.45,.68,.26,.04,.33,.01,.12,.34,.29,.05,.27,.21,.15,.01,.47,.03,.68,.12,.67,.05,.5,.5,.01,.67,.53,.77,.72,.14,.93,.05,.12,.53,.05,.39,.03,.61,.22,.99,.64,.39,.09,.3,.46,.5,.18,.01,.85,.04,.07,.12,.27,.22,.11,.07,.28,.27,.71,.37,.17,.11,.31,.33,.72,.04,.1,.16,.32,.84,.55,.15,.33,.23,.06,.57,.95,.01,.39,.2,.91,.04,.06,.2,.67,.25,.39,.35,.06,.88,0,.03,.51,.18,.41,.07,.79,.03,.17,.88,.05,.02,.03,.13,.34,.67,.04,.01,.06,.09,.36,.43,.24,.65,.57,.79,.71,.7,.19,.29,.47,.08,.27,.39,.05,.2,.77,.31,.13,.77,.27,.27,.08,.27,.84,.59,.2,.49,.16,.1,.45,.72,.41,.52,.51,.52,.05,.07,.4,.05,.33,.59,.21,.99,.1,.06,.04,.24,.74,.21,.13,.88,.78,.15,.58,.16,.39,.05,.3,.3,.21,.78,.24,.11,.42,.13,.09,.5,.01,.13,.23,.88,.94,.1,.52,.12,.77,.74,.07,.97,.04,.08,.37,.05,.01,.86,.05,.39,.08,.63,.13,.05,.69,.53,.72,.12,.13,.19,.9,.2,.18,.07,.43,.06,.81,.12,.87,.44,.48,.33,.06,.17,.09,.07,.13,.56,.07,.03,.73,.24,.39,.48,.99,.08,.12,.26,.07,.86,.3,.3,.43,.19,.09,.46,.97,.72,.18,.05,.37,.68,.91,.01,.62,.6,.42,.8,.58,.53,.35,.11,.38,.13,.91,.97,.1,.55,.18,.86,.94,.79,.28,.43,.31,.07,.14,.32,.72,.63,.02,.39,.14,.55,.37,.78,.38,.68,.04,.2,.34,.97,.05,.01,.03,.33,.02,.76,.01,.02,.8,.24,.65,.27,.75,.76,.74,.91,.44,.23,.56,.06,.83,.05,.7,.05,.19,.64,.4,0,.05,.91,.12,.34,.68,.92,0,.43,.06,.06,0,.12,.02,.34,.19,.82,.51,.26,.82,.29,.37,.5,.83,.09,.12,.8,.12,.75,.29,.39,.92,.12,.16,.04,.05,.59,.34,.98,.16,.08,.06,.07,.12,.62,.75,.28,.66,.21,.54,.03,.54,.03,.32,.36,.18,.58,.46,.51,.48,.18,.44,.44,.67,.1,.02,.4,.09,.33,.91,.02,.96,1,.68,.71,.49,.26,.49,.01,.6,.65,.8,.03,.44,.33,.14,.38,.94,.01,.81,.96,.43,.98,.24,.56,.2,.68,.93,.88,.92,.02,.69,.91,.69,.02,.54,.23,.92,.43,.27,.52,.4,.65,.07,.11,.59,.34,.18,.7,.95,.49,.29,.59,.89,.15,.17,.7,.75,.54,.76,.18,.66,.92,.62,.63,.8,.72,.06,.24,.56,.3,.6,.68,.94,.94,.12,.29,.54,.57,.81,.64,.2,.28,.68,.41,0,.57,.07,.36,.22,.05,.68,.53,.05,.12,.98,.16,.95,.16,.15,.71,.27,.18,.09,.17,.91,.72,.14,.06,.96,.63,.92,.4,.65,.33,.02,.38,.21,.16,.89,.41,.36,.87,.3,.04,.5,.24,.38,.81,.98,.96,.32,.12,.05,.24,.79,.63,.6,.96,.25,.29,1,.3,.94,.78,.37,.32,.57,.65,.2,.6,.26,.57,.23,.23,.96,.31,.65,.09,.79,.45,.05,.78,.26,.73,.35,.39,.21,.31,.1,.33,.55,.09,.53,.02,.93,.21,.2,.49,.1,.72,.05,.23,.48,.88,.05,.9,.36,.38,.1,.06,.43,.42,.01,.37,.55,.96,.67,.26,.82,.15,.11,.29,.54,.96,.55,.13,.55,.92,.08,.41,.48,.35,.31,.87,.46,.94,.02,.88,.88,.47,.22,.17,.8,.29,.11,.05,.74,.08,.16,.3,.18,.04,.17,.56,.57,.12,.99,.78,.37,.72,.73,.52,.05,.15,.12,.54,.04,.32,.86,.3,.77,.35,.21,.94,.05,.42,.09,.33,.26,0,.41,.4,.95,.05,.29,.64,.07,.2,.21,.57,.62,.27,.67,.27,.71,.67,.38,.81,.71,.72,.2,.71,.56,.1,.69,.01,.63,.47,.65,.02,.97,.77,.5,.93,.57,.93,.57,.52,.05,.02,.29,.12,.02,.43,.67,.25,.15,.03,.04,.02,.33,.22,.85,.77,.72,.18,.37,.28,.23,.69,.71,.55,.99,.38,.14,.14,.23,.24,.93,.02,.37,.08,.74,.2,.35,.65,.09,.19,.14,.06,.01,.41,.21,.86,.55,.58,.55,.28,.78,.09,.37,.11,.78,.46,.53,.16,.2,.13,.14,.35,.17,.84,.2,.05,.34,.06,.2,.02,.08,.29,.07,.01,.29,.02,.16,.17,0,.02,.09,.53,.09,.92,.64,.1,.01,.02,.02,0,.33,.59,.09,.96,.41,.4,.07,.06,.43,.09,.24,.06,.02,.49,.43,.7,.53,.47,.3,.34,.21,.95,.3,.43,.47,.22,.96,.85,.62,.08,.44,.19,.33,.26,.16,.1,.11,.21,.06,.16,.03,.82,.52,.13,.07,.74,.22,.57,.62,.76,.17,.09,.39,.39,.43,.58,.06,.13,.45,.1,.38,.17,.45,.35,.81,.4,.18,.27,.41,.25,.41,.06,.67,.35,.6,.23,.7,.92,.64,.06,.02,.41,.7,.13,.05,.01,.26,.08,.81,.1,.43,.08,.29,.98,.1,.39,.52,.03,.13,.1,.38,.02,.04,.06,0,.38,.23,.46,.49,.33,.01,.02,.03,.04,.14,.08,.69,.06,.49,.32,.48,.01,.22,.77,.02,.04,.1,.87,.11,.14,.01,.94,.21,.9,.04,.28,.2,.37,.15,.19,.27,.02,.72,.29,.55,.56,.39,.28,.32,.33,.17,.59,.06,.07,.05,.7,.03,.12,.84,.31,.06,.08,.12,.05,.06,.06,.54,.23,.64,.67,.05,.12,.06,0,.84,.55,.68,.08,.4,.47,.09,.63,.15,.11,.25,.57,.64,.16,.74,.57,.33,.33,.19,.73,.44,.27,.51,.03,.11,.08,.37];export{a as pvalData};
