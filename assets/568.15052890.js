const a=[.13,.13,.74,.27,.51,.03,.8,.06,.41,.18,.36,.2,.03,.83,.61,.72,.48,.74,.35,.02,.69,.91,.11,.4,.92,.83,.55,.48,.48,.39,.26,.61,.89,.02,.82,.2,.62,.47,.3,.56,.06,.56,.72,.11,.53,.51,.71,.27,.46,.57,.63,.06,.96,.66,.06,.5,.43,.01,.83,.93,.25,.72,.9,.56,.59,.28,.99,.33,.58,.29,.77,.63,.28,.13,.82,.91,.82,.23,.56,.67,.88,.78,.2,.8,.01,.43,.7,.3,.94,.9,.22,.89,.29,.7,.55,.31,.39,.87,.11,.15,.43,.88,.01,.74,.05,.16,.8,.62,.87,.37,.1,.36,.73,.77,.31,.51,.38,.39,.47,.71,.04,.26,.84,.14,.5,.16,.59,.04,.2,.34,.29,.45,.15,.93,.58,.39,.66,.19,.13,.05,.99,.03,.6,.61,.02,.04,.42,.01,.35,.53,.97,.72,.2,.57,.22,.17,.7,.17,.25,.62,.45,.33,0,.48,.31,.1,.12,.29,.02,.74,.01,.23,.29,.23,.75,.24,.14,.29,.11,1,.09,.16,.31,.61,.21,.07,.75,.29,.65,.5,.4,.5,.55,.15,.76,.69,.52,.38,.07,.83,.58,.5,.28,.57,.81,.49,.69,.24,.2,.29,.33,.41,.44,.41,.01,.79,.17,.95,.21,.8,.14,.08,.91,.75,.88,.36,.21,.27,.06,.13,.01,.69,.74,.88,.14,0,.32,.24,.15,.07,.58,.42,.59,.19,.74,.9,.48,.25,.52,.09,.47,.59,.17,.11,.84,.29,.68,.24,.57,.51,.88,.42,.2,.9,.38,.02,.62,.74,.73,.05,.53,.33,.37,.51,.96,.43,.34,.15,.88,.57,.24,.42,.66,.35,.09,.82,.08,.57,.04,.81,.21,.7,.67,.78,.07,.85,.53,.01,.46,.55,.79,.73,.91,.83,.52,.64,.45,.69,.1,.4,.88,.65,.02,.1,.21,.33,.38,.56,.54,.79,.74,.45,.33,.71,.98,.01,.8,.16,.73,.12,.17,.48,.02,.04,.39,.01,.35,.7,.78,.96,.49,.56,.03,.11,.29,.83,.51,.12,.51,.21,.35,.06,.09,.02,.83,.55,.96,.01,.86,.65,.05,.1,.05,.52,.4,.28,.07,.72,.96,.02,1,.74,.47,.08,.34,.01,.74,.54,0,.07,.36,.01,.12,.64,.2,.26,.11,.81,.68,.76,.99,.21,.29,.51,.54,.56,.78,.27,.09,.56,.11,.04,.85,.33,.52,.47,.08,.56,.63,.29,.36,.69,.37,.84,0,.89,.91,.98,.19,.1,.88,.23,.82,.05,.33,.48,.54,.67,.17,.59,.62,.14,.54,.41,.22,.59,.69,.93,.52,.17,.34,.92,.72,.03,.55,.71,.43,.87,.05,.38,.39,.83,.96,.11,.49,.6,.31,.43,.03,.36,.75,.79,.97,.05,.89,.17,.79,.6,.3,.46,.68,.36,.15,.29,.39,.82,.5,.77,.67,.76,.37,.16,.98,.36,.54,.26,.34,.84,.87,.92,.33,.4,.52,.75,.97,.79,.61,.06,.74,.09,.11,.13,.26,.37,.87,.55,.19,.55,.53,.98,.76,.11,.84,.8,.35,.91,.15,.41,.04,.66,.05,.69,.93,.82,.78,.01,.72,.68,.54,.84,.13,.54,.15,.48,0,.08,.05,.85,.16,.19,.11,.23,.03,.7,.33,.52,.03,.36,.65,.21,.02,.47,.57,.7,.87,.31,.7,.6,.78,.9,.29,.06,.04,.28,.31,.65,.39,0,.16,.1,.94,.73,.79,.94,.78,.67,.09,.45,.74,.02,.49,.08,.5,.79,.24,.25,.49,.79,.4,.49,.45,.23,.56,.61,.49,.37,.77,.81,.03,.53,.47,.83,.88,.59,.65,.32,.18,.8,.57,.29,.67,.58,.08,.34,.1,.71,.59,.73,.54,.07,.16,.07,.2,.81,.1,.06,.14,.43,.31,.58,.74,.29,.4,.28,.26,.53,.84,.31,.74,.65,.71,.72,.82,.67,.96,.61,.17,.78,.37,.27,.24,.79,.77,.34,.97,.05,.44,.11,.93,.79,.55,.82,.56,.22,.72,.02,.07,.15,.4,.83,.33,.42,.01,.37,.02,.28,.83,.82,.66,.86,.1,.13,.99,.39,.05,.27,.58,.93,.99,.07,.8,.35,.31,.09,.01,.69,.24,.64,.69,.46,.88,.42,.1,.17,.36,.22,.04,.83,.01,.51,.91,.5,.28,.79,.41,.51,.11,.68,.35,.25,.25,.73,.69,0,.8,.03,.25,.49,.44,.97,.99,.34,.9,.02,.37,.37,.31,.71,.32,0,.6,.64,.68,.36,.84,.21,.64,.28,.87,.45,.14,.78,.03,.03,.46,.27,.5,.63,.18,.86,.12,.08,.95,.33,.45,.35,.77,.01,.14,.04,.18,.18,.49,.02,.3,.63,.95,.62,.77,.35,.84,.55,.39,.98,.97,.3,.11,.24,.15,.41,.68,0,.26,.28,.85,.3,.64,.46,.87,.24,.92,.76,.22,.97,.99,.05,.67,.1,.27,.03,.76,.57,.76,.32,.04,.6,.41,.36,.07,.88,.3,.01,.37,.38,.7,.27,.26,.07,.14,.17,.48,.25,.04,.02,.26,.54,.07,.55,.42,.69,.69,.93,.24,.32,.52,.9,.81,.65,.85,.31,.17,.53,.3,.96,.01,.08,.15,.38,.12,.45,.18,.58,.69,.84,.08,.47,.98,.06,.39,.3,.45,.55,.97,.32,.19,.37,.99,.51,.07,.18,.89,.57,.19,.85,.12,.36,.1,.05,.91,.99,.92,.5,.11,.18,.85,.02,.52,0,.39,.54,.32,.73,.39,.06,.02,.41,.04,.26,.41,.12,.03,.41,.56,.68,.43,.5,.5,.04,.33,.92,.09,.75,.58,.58,.97,.59,.02,.37,.86,.53,.38,.48,.6,.33,.88,.65,.23,.6,.09,.97,.76,.54,.95,.4,.2,.48,.61,.53,.03,.3,.84,.53,.14,.66,.58,.46,.94,.19,.57,.38,.9,.79,.85,.76,.27,.37,.59,.71,.1,.52,.13,.23,.7,.75,.47,.49,.54,.11,.2,.66,.69,.33,.37,.68,.77,.84,.36,.05,.08,.04,.65,.44,.17,.92,.84,.21,.03,.76,.81,.58,.04,0,.03,.13,.64,.77,.1,.26,0,.24,.48,.15,.24,.47,.16,.22,.8,.09,.07,.81,.83,.27,.47,.19,.59,.2,.87,.17,.12,.77,.67,.41,.71,.06,.18,.47,.51,.25,.82,.3,.33,.41,.16,.13,.6,.36,.17,.51,.97,.59,.11,.79,.51,1,.28,.12,.26,.32,.24,.98,.68,.03,.61,.53,.49,.13,.31,.48,.62,.87,.36,.04,.04,.63,.67,.81,.22,.13,.44,.9,.09,.92,.35,.55,.12,.81,.94,.84,.71,.55,.69,.21,.82,.63,.93,.38,.37,.17,.81,.72,.1,.22,.06,.23,.93,.11,.09,.32,.86,.71,.02,.37,.39,.03,.66,0,.83,.45,.44,.79,.97,.34,.66,.33,.46,0,.71,.43,.27,.19,.38,.69,.39,.69,.05,.94,.69,.06,.02,.04,.91,.82,.2,.64,.74,.04,.61,.42,.73,.34,.02,.1,.04,.99,.34,.18,.05,.58,.32,.02,.86,.85,.07,.18,.81,.7,.36,.48,.47,.75,.32,.52,.63,.05,.24,.34,.22,.29,.76,.55,.22,.55,.97,.65,.84,.08,.38,.28,.32,.97,.97,.4,.74,.3,.66,.45,.03,.87,.83,.53,.32,.05,.2,.79,.01,.34,.02,.9,.65,.21,.55,.58,.14,.48,.82,.09,.08,.82,.64,.84,.98,.79,.35,.04,.02,.16,.46,.26,.13,.5,.16,.33,1,.86,.8,.69,.58,.7,.97,.03,.29,.93,.86,.71,.04,.91,.23,.22,.99,.04,.76,.62,.08,.12,.14,.03,.04,.66,.28,.48,.6,.77,.03,.19,.25,.07,.4,.14,.66,.12,.52,.36,.53,.92,.36,.78,.91,.08,.18,.66,.34,.15,.56,.16,.4,.06,.76,.46,.48,.04,.36,.29,.71,.14,.13,.01,.39,.38,.51,.61,.99,.04,.05,.17,.67,.34,.05,.04,.5,1,.73,.87,.91,.09,.55,.32,.71,.34,.28,.03,.36,.21,.4,.6,.38,.79,.75,.92,.67,.4,.23,.94,.35,.2,.41,.47,.14,.42,.58,.63,.94,.1,.14,.17,.93,.39,.03,.12,.85,.93,.11,.2,.3,.68,.27,.22,.17,.49,.08,.25,.95,.82,.12,.5,.4,.43,.61,.2,.55,.64,.43,.59,.89,.15,.46,.49,.53,.66,.32,.82,.7,.7,.75,.15,.29,.26,.14,.53,.11,.78,.25,.33,.03,.33,.4,.56,.15,.02,.21,.54,.96,.01,0,.36,.33,.23,.03,.25,.09,.86,.97,.89,.01,.03,.88,.34,.83,.44,.81,.04,.65,.2,.37,.8,.29,.11,.78,.99,.05,.6,.51,.71,.86,.26,.96,.67,.58,.25,.56,.03,.25,.45,.42,.89,.39,.23,.5,.65,.89,.75,.3,.84,.34,.92,.81,.62,.39,.4,.57,.56,.28,.79,.72,.77,.08,.66,.81,.58,.58,.26,.02,.75,.62,.67,.44,.68,.36,.34,.02,.02,.05,.96,.01,.04,.13,.67,.16,.92,.14,.04,.27,.58,.25,.34,.35,.67,.82,.41,.57,.74,.38,.36,.37,.18,.39,.63,.95,.66,.61,.2,.85,.84,.91,.62,.35,.25,.83,.62,.09,.72,.31,.24,.3,.13,.69,.35,.94,.27,.84,.54,.18,.12,.67,.33,.88,.46,.58,.89,.65,.65,.92,.1,.65,.71,.75,.15,.1,0,.67,.67,.98,.19,.4,.97,.03,.24,.41,.24,.26,.87,.48,.64,.49,.2,.07,.3,.9,.22,.42,.11,1,.87,.53,.76,.05,.5,.42,.27,.49,.53,.59,.72,.96,.77,.77,.9,.89,.29,.96,.53,.97,.45,.59,.96,.16,.43,.65,.79,.86,.78,.13,.81,.17,.31,.42,.29,.28,.56,.73,.42,.49,.99,.03,.15,.99,.82,.17,.55,.29,.54,.89,.72,.8,.04,.06,.66,0,.54,.77,.17,.46,.37,.31,.95,.83,0,.62,.97,.57,.19,.47,.66,.16,.02,.3,.55,.3,.9,.98,.29,.87,.62,.15,.11,.17,.47,.42,.38,.23,.11,.83,.3,.56,1,.73,.32,.6,.49,.59,.59,.89,.14,.16,.55,.4,.37,.52,.56,.67,.47,.2,.94,.52,.77,.88,.77,.05,.84,.62,.36,.03,.85,.03,.75,.36,.49,.52,.62,.2,.8,.53,.87,.73,.44,.91,.05,.01,.41,.35,0,.53,.1,.82,.52,.85,.46,.9,.75,.05,.57,.45,.2,.3,.4,.74,.71,.75,.26,.3,.47,.18,.13,.57,.8,.45,1,.08,.32,.53,.73,.01,.75,.38,.01,.99,.43,.57,.51,.47,.98,.84,.94,.33,.73,.18,.46,.04,.06,.72,.35,.66,.79,.23,.18,.21,.84,.83,.58,.16,.95,.01,.3,.66,.11,.59,.21,.21,.57,.63,.93,.42,.55,.37,.2,.31,.63,.38,.46,.79,.04,.98,.85,.61,.38,.26,.5,.44,.44,.37,.82,.25,.12,.74,.92,.78,.17,.08,.32,.22,.54,.91,.88,.62,.41,.64,.37,.31,.82,.41,.76,.15,1,.06,.85,.44,.19,.15,.53,.72,.14,.51,.66,.46,.98,.82,.04,.04,.83,.03,.78,.3,.97,.11,.46,.99,.13,.85,.44,.38,.06,.21,.11,.13,.66,.35,.72,.72,.55,.29,.37,.54,.67,.96,.17,.27,.11,.18,.16,.88,.68,.59,.18,.4,.6,.05,.31,.07,.05,.69,.45,.07,.81,.13,.91,.49,.56,.87,.75,.08,.05,.48,.28,.86,.02,.24,.15,.63,.54,.07,.54,.82,.39,.16,.69,.46,.94,.25,.48,.43,.41,.29,0,.65,.57,.44,.67,.43,.38,.47,.55,.61,.09,.09,.38,.41,.52,.81,.85,.85,.68,.47,.16,.74,.47,.37,.95,.01,.11,.21,.69,.54,.52,.89,.24,.71,.42,.49,.43,.91,.18,.92,.78,.91,.71,.72,.19,.41,.83,.81,.48,.42,.71,.24,.43,.89,.78,.82,.03,.94,.1,.02,.66,.11,.47,.61,.76,.71,.61,.24,.53,.58,.47,.88,.52,.59,.71,.34,.05,.78,.95,.22,.33,.73,.96,.4,.94,.03,.05,.45,.62,.76,.95,.41,.4,.89,.85,.38,.16,.48,.4,.58,.67,.97,.45,.88,.44,.5,.47,.68,.31,.02,.72,.93,.9,.59,.92,.24,.41,.07,.78,.54,.52,.02,.34,.44,.42,.3,.61,.76,1,.4,.57,.45,.32,.74,.1,.99,.27,.85,.3,.09,.69,.72,.01,.8,.55,.09,.16,.54,0,.51,.53];export{a as pvalData};
