const a=[0,.89,.09,.18,.04,.08,.72,.02,.51,.73,.84,.33,.38,.06,.69,.67,.84,.44,.07,.09,.84,.22,.16,.9,.99,.3,.84,.07,.98,.99,.94,.11,.49,.08,.24,.23,.29,.68,.13,.13,.01,.14,.11,.22,.99,.6,.08,.01,.04,.02,.89,.05,.23,.11,.74,.89,.82,.12,.01,.86,.19,.23,.02,.51,0,.24,.09,.68,.02,.16,.38,.68,.72,.01,.22,.98,.71,.27,.06,.03,.22,.87,.34,.54,.23,.32,.73,.19,.01,.11,.12,.06,.7,.12,.11,.86,.05,.01,.08,.46,.7,.07,.48,.94,.13,.1,.82,.69,.77,.03,.28,.11,.67,.08,.2,.23,.97,.38,.07,1,.32,.14,.73,.66,.42,.03,.06,0,.76,.1,.68,.42,.54,.2,.95,.06,.34,.21,.99,.01,.06,.04,.17,.46,.02,.21,.3,.04,.21,.58,.06,.51,.99,.66,.7,.16,.58,.03,.82,.63,.53,.05,.95,.89,.94,.47,.96,.52,.24,.96,.01,.29,.58,.28,.75,.06,.93,.76,.96,.16,.31,.06,.25,.01,.75,.06,.63,.35,.23,.09,.55,.92,.93,.61,.26,.06,.15,.31,.06,.09,.53,.3,.13,.85,.06,.23,.86,.35,.29,.35,.73,.49,.42,.24,.17,1,.04,.8,.23,.32,.74,.13,.04,.14,.65,.1,.71,.8,.35,.45,.99,.94,.43,.01,0,.02,.62,.63,.42,.39,.33,.42,.45,.51,.83,.47,.74,.43,.4,.04,.34,.99,.61,.43,.11,.23,0,.54,.1,.02,.59,.24,.44,.05,.19,.21,0,.12,.06,.97,.11,.13,.1,0,.33,.53,.89,.46,.03,.01,.38,.34,1,.15,.72,.49,.98,.54,.56,.35,.39,.08,.41,.62,.54,.1,.36,.23,.27,.44,.11,.03,.81,.95,.25,.88,.88,.05,.86,.65,.38,.06,.3,.03,.68,.55,.07,.11,.01,0,.29,.16,.65,.15,.21,.81,.45,.07,.73,.85,.07,.17,.1,.26,.39,.4,.08,.52,.13,.88,.67,.08,.32,.81,.1,.01,0,.92,.04,.81,.13,.31,.13,.77,.58,.61,.69,.08,.01,.02,.64,.39,.84,.96,.82,.01,.21,.09,.21,.3,.24,.61,.97,.49,.83,.89,.21,.24,.37,.67,.23,.73,.28,.63,.46,.97,.42,.21,.12,.2,0,.07,.75,.75,.71,.03,.28,.77,.11,.98,.48,.12,0,.68,.27,.02,.32,.03,.14,.91,.01,.43,.38,0,.82,.75,.06,.39,.5,.8,.28,.03,.17,.01,.47,.12,.19,.48,.8,.63,.85,.44,.75,.44,.63,.05,.78,.17,.03,.33,.06,.42,.26,.02,0,.1,.05,.25,.13,.02,.1,.17,.05,.21,.21,.2,.14,.2,.12,.18,.01,.27,0,.92,.76,.63,.05,.31,.14,.14,.3,.21,.29,.08,.43,.43,.09,.4,.08,.39,.35,.21,.11,.84,0,.89,.11,.97,.04,.01,.85,.34,.88,.53,.11,.23,.08,.22,.46,.33,.64,.06,.08,.36,.14,.84,.2,.56,.33,.18,.08,.17,.23,.11,0,0,.91,.52,.71,.24,.01,.02,.83,.43,.96,0,.69,.61,.43,.67,.62,.07,.13,.92,.02,.14,.42,.76,.08,.57,.13,.02,.04,.52,.51,.23,.04,.63,0,.5,.62,.07,.03,.04,.17,.02,.16,.73,.31,.35,.01,.04,.87,.53,.94,.29,.09,.66,.73,.06,.03,.01,.27,.74,.11,.04,.96,.55,.54,.39,.29,.07,.17,.84,.09,.67,.15,.41,.23,.36,.65,0,0,.02,.49,.01,.31,.01,.56,.69,.75,.17,.03,.34,.1,.92,.42,.14,.17,.5,.57,.92,.21,.75,.01,.71,.02,.54,.31,.02,.17,.89,.18,.9,.48,.01,.09,.56,.11,.29,.47,.07,.4,.19,.78,.33,.51,.8,.56,.92,.73,.99,.6,.15,.68,.16,.09,.3,.92,.03,.01,0,.91,.03,.44,.31,.43,.12,.94,.16,.06,.06,.13,.25,.08,.99,.43,.53,.93,.43,.5,.02,.31,.91,.55,.55,.16,.11,0,.18,.44,.16,.8,.32,.26,.48,.05,.2,.28,.07,.04,.02,.82,.31,.02,.86,.65,.55,0,.01,.69,.32,.7,.03,.74,.8,.63,.62,.23,.79,.16,.92,.44,.44,.4,.9,.29,.64,.89,.18,.18,.11,.39,.28,.85,.21,.43,.27,.01,.02,.01,.81,.24,.79,.71,.19,.2,.4,.08,.04,.54,.62,.41,.67,.23,.01,.98,.28,.81,.95,.01,.22,.42,.06,.34,.86,.99,.6,.55,.19,.02,.88,.45,.06,.23,.02,.03,.01,.03,.07,.29,.27,.11,.05,.37,.06,.22,.19,.06,.09,.16,.54,.05,.09,.01,.06,.93,.5,.07,.78,.06,.65,.09,.61,.31,.86,.02,.4,.32,.39,.43,.13,.77,.04,.82,.91,.47,.42,.3,.65,.91,.37,.16,0,.29,.45,.51,.13,.32,.19,.17,.05,.65,.02,.01,.08,.7,.55,.3,.06,.76,.1,.69,.2,.94,.24,.6,.03,.42,.1,.23,.96,.25,.49,.91,.02,.32,.52,.56,.7,.49,.31,.51,.79,.09,0,.51,.08,.65,.02,.53,.03,.48,.7,.34,.65,.59,.02,.33,.5,.39,.2,.11,.44,.45,.1,.31,.53,.21,.06,.82,.44,.2,.04,.03,.74,.8,.69,.12,.67,.08,.54,.7,.41,.09,.07,.01,.21,0,.12,.85,.26,.39,.26,.02,.62,.03,.31,.02,.59,.01,.56,.07,.62,.01,.7,.94,.94,.24,.9,.38,.05,.47,.68,.07,.02,.06,.05,.06,.16,.81,.02,.25,.21,.14,.09,.6,.17,.38,.05,.34,.91,.44,.17,.06,.04,.39,.26,.47,.87,.35,.43,.33,.92,.58,.29,.09,.83,.08,.68,.77,.55,.46,.88,.12,.83,.73,.43,.35,.79,.37,.05,.93,.08,.53,.25,.59,.16,.79,.56,.01,.48,.41,.41,.4,.99,.78,.03,.05,.14,.01,.72,.35,.97,.79,.61,.92,.29,.94,0,.21,.22,.75,.46,.18,.75,.12,.19,.68,.03,.03,.98,.36,.68,.3,.37,.62,.11,.22,.29,.12,.01,.96,.48,.42,.32,.13,.41,.12,.58,.1,.95,.39,.96,.08,.88,.22,.63,.63,.89,.75,.03,.96,.33,.8,.53,.02,.35,.33,.23,.04,.31,.79,.07,.18,.96,.35,.1,.68,.62,.38,.03,.86,.88,.07,.28,.35,.38,.15,.59,.49,.19,.72,.04,.1,.75,.03,.57,.84,.07,.01,.24,.89,.03,.49,.51,.17,.18,.24,.87,.92,.11,0,.17,.02,.12,.56,.4,.19,.22,.05,.76,.45,.94,.14,.03,.04,.79,.42,.83,.34,.37,.14,.18,0,.65,.17,.92,.82,.38,.02,.42,.02,.28,.92,.15,.59,.78,.15,.21,.65,.49,.03,.69,.32,.05,.36,.44,.03,.13,.36,.05,.18,.74,.17,.03,.86,.01,.12,.61,.79,0,.57,.26,.16,.66,.02,.24,.87,.01,.58,.32,.05,.76,.54,.21,.01,.19,.06,.19,.02,.19,.82,.55,.16,.14,.1,.27,.57,.33,.46,.81,.6,.73,.12,.36,.03,.13,.26,.01,.48,.29,.13,.87,.05,.05,.81,.05,.04,.17,.38,.93,.64,.02,.49,.06,.36,.05,.01,.84,.05,.11,.68,.49,.63,.95,.02,.42,.01,.97,.71,.61,.88,.02,.03,.4,.77,.42,.98,.31,.61,.94,.06,.1,.04,.16,.04,.06,.16,.03,.18,.04,.07,.45,.02,.41,.11,.54,.52,.02,.27,.71,.12,.61,.23,.22,.07,.95,.18,.14,0,.1,.18,.94,.11,.16,1,1,.38,.01,.04,.79,.26,.21,.55,.58,.49,.19,.26,.39,.34,.06,.41,.62,.09,.05,.04,.24,.67,.04,.11,.46,.02,.33,.88,.96,.73,.04,.23,.03,.59,.99,.09,.5,.59,.13,.91,.51,.16,.44,.03,.1,.05,.51,.67,.02,.67,.77,.17,.06,.42,.33,.49,.71,.16,.38,.01,.06,0,.34,.34,.1,.51,.98,.34,.4,.19,.36,.41,.15,.26,.74,.13,.84,.77,.99,.21,.15,.01,.47,.88,.29,0,.24,.12,.78,.55,.41,.4,.38,.4,.52,.03,.75,.18,.9,.02,.41,.22,.86,.05,.99,.13,.03,.02,.75,.43,.84,.45,.6,.38,.67,.76,.45,.26,.08,0,.11,.14,.01,.49,.22,.58,.26,.2,.56,.35,.11,.11,.37,.11,.41,.18,.01,.08,.31,.33,.17,.97,.05,.04,.01,.3,.61,.13,.28,.01,.99,.36,.06,.67,.38,.13,.98,.06,.88,.04,.96,.57,.54,.26,.13,.03,.02,.07,.67,.13,0,.31,.38,.01,.6,.37,.17,.01,.49,.05,.44,.5,.68,0,.33,.77,.96,.04,.18,.48,.66,.53,.4,.2,.15,.98,.19,.56,.01,.69,.04,.37,.52,.69,.12,.55,.39,.01,.76,.06,.17,.25,0,.55,.26,.07,.16,.89,.05,.35,.8,.27,.65,.47,.18,.79,0,.72,.13,.36,.33,.51,.5,.18,.93,.1,.98,.14,.16,.07,.22,.06,.58,.32,.99,.57,.05,.07,.26,.14,.69,.03,.69,.15,.06,.5,.97,.01,.89,.05,0,.35,.25,.64,.52,.08,.33,.01,.59,.13,.39,.74,.05,.11,.33,0,.01,.03,.14,.38,.77,.87,.59,.73,.08,.23,0,.02,.06,.42,.13,.16,.2,.23,.29,0,.35,.19,.93,.09,0,.57,.32,.05,0,.66,.79,.05,.13,.06,.13,.02,.36,.62,.12,0,.75,0,.62,.17,.1,.03,.17,.03,.05,.91,.18,.71,.91,.05,.13,.47,.93,.04,.42,.72,.66,.11,.05,.64,.05,.24,.95,.46,.06,.04,.84,.45,.46,.2,.17,.06,.07,.43,.18,.55,.4,.82,.03,.23,.78,.5,.66,.11,.22,.33,.32,.01,.55,.01,0,.63,.18,.53,.37,.98,.07,.72,.15,.52,.61,.08,.44,0,.22,.24,0,.96,0,0,.89,.23,.31,0,.05,.04,.02,.11,.83,.06,.38,.01,.21,.51,.29,.13,.39,.18,.51,.02,.05,.06,.05,.76,.2,.56,.86,.37,.01,.38,.67,.76,.61,.41,.01,.26,.13,.8,.11,.1,.8,.83,.31,.97,.35,.58,.43,.14,.06,.35,.11,.44,.32,.15,.21,.01,0,0,.04,.02,.01,.59,.32,.01,.96,.68,.65,.11,.13,.38,0,.37,.95,.02,.76,.11,.01,.35,.02,.96,.77,.04,.1,.01,.28,.68,.22,0,.09,.04,.98,.52,.18,0,.03,.27,.19,.58,.2,.68,.17,.47,.81,.49,.04,.22,.19,.01,.87,.24,.33,.18,.09,.01,.23,.11,.02,.01,.25,.37,.03,.61,.02,.16,.04,.83,.76,.18,.83,.21,.2,.67,.03,.21,.28,.21,.49,.29,.15,.51,0,.33,.06,.41,.38,.32,.18,.33,.34,.31,.4,.61,.18,.06,.05,.07,.13,0,.5,.02,.29,.47,.02,.61,.96,.19,.14,.11,.26,.47,.04,.71,.35,.02,0,.62,.48,.96,.03,.01,.72,.08,.65,.49,.19,.03,.79,.13,.95,.71,.8,.49,0,.16,.83,.65,.7,.02,.13,.14,.34,.13,.13,.39,.59,.01,.92,.16,.49,.54,.77,.13,.44,.45,.06,.18,.3,.76,.46,.81,.98,.8,.42,.83,.75,.93,.02,.24,.13,.15,.04,.18,.96,.71,.29,.24,.04,.9,.05,.28,.02,.22,.72,.06,.8,.43,.53,.02,.05,.17,.48,.27,.66,.46,.2,.18,.15,.07,.31,.05,.07,.18,.85,.19,.8,0,.08,.82,.32,.83,.07,.01,.61,.43,.3,.46,.58,0,.65,.01,.53,.07,.79,.24,.05,.02,.43,.03,.02,.13,.42,.28,.16,.93,.12,.14,.16,.17,.86,.74,.68,.07,.73,.23,.58,.33,.92,.22,.35,.75,0,.83,.41,.04,.79,0,.75,.04,.13,.02,.03,.87,.55,.19,.78,.67,.59,.02,.1,.38,.33,.21,.06,.86,.14,.09,.02,.11,.16,.61,.01,.57,.05,.19,.13,.05,.99,.2,.58,.01,.71,.77,.79,.02,.73,.09,.25,.12,.14,.28,.17,.92,.08,.62,.39,.14,.14,.02,.03,.72,.04,.07,.85,.24,.21,.03,.04,.55,.18,.09,.43,.06,.07,.15,.16,.45,.76,.05,.59,.46,.05,.21,.14,.79,.78,.17,.3,.02,.36,.73,.49,.16,.04,.01,.12];export{a as pvalData};
